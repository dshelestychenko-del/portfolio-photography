'use client'

import { useState } from 'react'
import { ContactFormData, FormErrors, validateContactForm, sanitizeFormData } from '@/lib/validation'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
    honeypot: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [formState, setFormState] = useState<FormState>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrors({})

    // Sanitize and validate form data
    const sanitizedData = sanitizeFormData(formData)
    const validation = validateContactForm(sanitizedData)

    if (!validation.isValid) {
      setErrors(validation.errors)
      setFormState('idle')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setFormState('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: '',
        honeypot: ''
      })
      
      onSuccess?.()
    } catch (error) {
      setFormState('error')
      setErrors({
        general: 'Something went wrong. Please try again later.'
      })
    }
  }

  const getFieldError = (fieldName: keyof FormErrors) => {
    return errors[fieldName]
  }

  const isFieldInvalid = (fieldName: keyof FormErrors) => {
    return !!errors[fieldName]
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">Your message has been sent successfully. I'll get back to you soon.</p>
        <button
          onClick={() => setFormState('idle')}
          className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-invalid={isFieldInvalid('name')}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
              isFieldInvalid('name') 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200'
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-invalid={isFieldInvalid('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
              isFieldInvalid('email') 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          aria-invalid={isFieldInvalid('phone')}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
            isFieldInvalid('phone') 
              ? 'border-red-500 bg-red-50' 
              : 'border-gray-200'
          }`}
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
          Project Type (optional)
        </label>
        <select
          id="project"
          name="project"
          value={formData.project}
          onChange={handleInputChange}
          aria-invalid={isFieldInvalid('project')}
          aria-describedby={errors.project ? 'project-error' : undefined}
          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
            isFieldInvalid('project') 
              ? 'border-red-500 bg-red-50' 
              : 'border-gray-200'
          }`}
        >
          <option value="">Select a project type</option>
          <option value="product-photography">Product Photography</option>
          <option value="brand-photography">Brand Photography</option>
          <option value="e-commerce">E-commerce Solutions</option>
          <option value="food-lifestyle">Food & Lifestyle</option>
          <option value="other">Other</option>
        </select>
        {errors.project && (
          <p id="project-error" className="mt-2 text-sm text-red-600" role="alert">
            {errors.project}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          aria-invalid={isFieldInvalid('message')}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none ${
            isFieldInvalid('message') 
              ? 'border-red-500 bg-red-50' 
              : 'border-gray-200'
          }`}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-600 text-sm" role="alert">
            {errors.general}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none"
      >
        {formState === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}

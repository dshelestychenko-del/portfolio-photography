export interface ContactFormData {
  name: string
  email: string
  phone?: string
  project?: string
  message: string
  honeypot?: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  project?: string
  message?: string
  general?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: FormErrors
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: FormErrors = {}

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  } else if (data.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters'
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.name.trim())) {
    errors.name = 'Name can only contain letters, spaces, hyphens and apostrophes'
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address'
  } else if (data.email.trim().length > 100) {
    errors.email = 'Email must be less than 100 characters'
  }

  // Phone validation (optional)
  if (data.phone && data.phone.trim().length > 0) {
    const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '')
    if (!/^\+?[\d\s\-\(\)]+$/.test(data.phone)) {
      errors.phone = 'Please enter a valid phone number'
    } else if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      errors.phone = 'Phone number must be between 10 and 15 digits'
    }
  }

  // Project validation (optional)
  if (data.project && data.project.trim().length > 0) {
    if (data.project.trim().length > 100) {
      errors.project = 'Project type must be less than 100 characters'
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  } else if (data.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters'
  }

  // Honeypot validation (anti-spam)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.general = 'Invalid submission'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export function sanitizeFormData(data: ContactFormData): ContactFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? data.phone.trim() : '',
    project: data.project ? data.project.trim() : '',
    message: data.message.trim(),
    honeypot: data.honeypot ? data.honeypot.trim() : ''
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData, validateContactForm, sanitizeFormData } from '@/lib/validation'
import { createTelegramService } from '@/lib/telegram'

// Integration interfaces for future use
interface EmailService {
  send(data: ContactFormData): Promise<void>
}

interface CRMService {
  createLead(data: ContactFormData): Promise<void>
}

// Mock services - replace with real implementations
class MockEmailService implements EmailService {
  async send(data: ContactFormData): Promise<void> {
    console.log('Email service:', data)
    // TODO: Implement actual email sending
    // Example: await resend.emails.send({...})
  }
}

class MockCRMService implements CRMService {
  async createLead(data: ContactFormData): Promise<void> {
    console.log('CRM service:', data)
    // TODO: Implement actual CRM integration
    // Example: await hubspotClient.crm.objects.basicApi.create({...})
  }
}

// Initialize services
const emailService = new MockEmailService()
const telegramService = createTelegramService()
const crmService = new MockCRMService()

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    
    // Basic rate limiting check (simple implementation)
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // TODO: Implement proper rate limiting with Redis or similar
    // For now, we'll just log the request
    console.log(`Contact form submission from ${clientIP} with ${userAgent}`)

    // Sanitize and validate form data
    const sanitizedData = sanitizeFormData(body)
    const validation = validateContactForm(sanitizedData)

    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      )
    }

    // Anti-spam check - honeypot field
    if (sanitizedData.honeypot && sanitizedData.honeypot.trim().length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid submission' 
        },
        { status: 400 }
      )
    }

    // Process the form submission - prioritize Telegram
    try {
      // Send to Telegram first (critical for notifications)
      await telegramService.send(sanitizedData)
    } catch (telegramError) {
      console.error('Telegram service failed:', telegramError)
      
      // If Telegram fails, we still try other services but return error to user
      const otherResults = await Promise.allSettled([
        emailService.send(sanitizedData),
        crmService.createLead(sanitizedData)
      ])

      const otherFailures = otherResults.filter(result => result.status === 'rejected')
      if (otherFailures.length > 0) {
        console.error('Other services also failed:', otherFailures)
      }

      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send notification. Please try again later.' 
        },
        { status: 500 }
      )
    }

    // Send to other services (non-critical)
    const otherResults = await Promise.allSettled([
      emailService.send(sanitizedData),
      crmService.createLead(sanitizedData)
    ])

    const otherFailures = otherResults.filter(result => result.status === 'rejected')
    if (otherFailures.length > 0) {
      console.error('Some optional services failed:', otherFailures)
      // Don't fail the request for non-critical services
    }

    // Log successful submission
    console.log('Contact form submitted successfully:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      project: sanitizedData.project,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact form endpoint. Use POST to submit forms.' 
    },
    { status: 405 }
  )
}

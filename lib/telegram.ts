import { ContactFormData } from './validation'

export interface TelegramConfig {
  botToken: string
  chatId: string
}

export class TelegramService {
  private botToken: string
  private chatId: string

  constructor(config: TelegramConfig) {
    this.botToken = config.botToken
    this.chatId = config.chatId
  }

  private formatMessage(data: ContactFormData): string {
    const message = [
      '*(\\ud83d\\udce7) New contact request from website*',
      '',
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      data.phone ? `*Phone:* ${data.phone}` : '',
      data.project ? `*Project:* ${data.project}` : '',
      '',
      '*Message:*',
      data.message
    ].filter(line => line.trim() !== '').join('\n')

    return message
  }

  async send(data: ContactFormData): Promise<void> {
    if (!this.botToken || !this.chatId) {
      throw new Error('Telegram bot token or chat ID not configured')
    }

    const message = this.formatMessage(data)
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'MarkdownV2',
          disable_web_page_preview: true
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          `Telegram API error: ${response.status} ${response.statusText} - ${errorData.description || 'Unknown error'}`
        )
      }

      const result = await response.json()
      
      if (!result.ok) {
        throw new Error(`Telegram API returned error: ${result.description || 'Unknown error'}`)
      }

      console.log('Telegram message sent successfully:', result.message_id)
    } catch (error) {
      console.error('Failed to send Telegram message:', error)
      throw error
    }
  }
}

export function createTelegramService(): TelegramService {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not found in environment variables')
  }

  return new TelegramService({
    botToken: botToken || '',
    chatId: chatId || ''
  })
}

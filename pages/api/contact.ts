import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

mail.setApiKey(process.env.SENDGRID_API_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { yourName, yourEmail, yourSubject, yourMessage, reCaptchaToken } = req.body

  if (!yourName) {
    return res.status(400).json({ error: '名前は必須です' })
  }
  if (!yourEmail) {
    return res.status(400).json({ error: 'メールアドレスは必須です' })
  }
  if (!yourMessage) {
    return res.status(400).json({ error: 'お問い合わせ内容は必須です' })
  }

  // reCAPTCHAによるチェックの実施
  const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${reCaptchaToken}`,
  })

  // チェック結果が代入される
  const recaptchaResult = await recaptchaRes.json()

  if (!recaptchaResult.success) {
    return res.status(400).json({ error: 'reCAPTCHAチェックに失敗しました' })
  }

  try {
    const message = `
    お名前: ${yourName}\r\n
    メールアドレス: ${yourEmail}\r\n
    件名: ${yourSubject}\r\n
    メッセージ: ${yourMessage}
  `

    await mail.send({
      to: process.env.EMAIL_TO,
      from: yourEmail,
      subject: `サイトからお問い合わせがありました。件名: ${yourSubject}`,
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    })
    return res.status(200).json({ status: 'Ok' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

const SibApiV3Sdk = require('sib-api-v3-sdk')
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

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { yourName, yourEmail, yourSubject, yourMessage } = req.body

  if (!yourName) {
    return res.status(400).json({ error: 'Name is required' })
  }
  if (!yourEmail) {
    return res.status(400).json({ error: 'Mail address is required' })
  }
  if (!yourMessage) {
    return res.status(400).json({ error: 'Message is required' })
  }

  // reCAPTCHAによるチェックの実施
  // const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${reCaptchaToken}`,
  // })

  // // チェック結果が代入される
  // const recaptchaResult = await recaptchaRes.json()

  // if (!recaptchaResult.success) {
  //   return res.status(400).json({ error: 'Invalid request' })
  // }

  try {
    const message = `
    <p>お名前: ${yourName}</p>
    <p>メールアドレス: ${yourEmail}</p>
    <p>件名: ${yourSubject}</p>
    <p>メッセージ: ${yourMessage}</p>
  `
    const defaultClient = SibApiV3Sdk.ApiClient.instance
    const apiKey = defaultClient.authentications['api-key']
    apiKey.apiKey = process.env.SIB_API_KEY
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

    sendSmtpEmail.subject = `サイトからお問い合わせがありました。件名: ${yourSubject}`
    sendSmtpEmail.htmlContent = message
    sendSmtpEmail.sender = { name: 'Kyoya Dev Blog', email: process.env.OFFICIAL_EMAIL }
    sendSmtpEmail.to = [{ email: process.env.OFFICIAL_EMAIL }]
    sendSmtpEmail.replyTo = { email: yourEmail, name: yourName }

    await apiInstance.sendTransacEmail(sendSmtpEmail)
    return res.status(200).json({ status: 'Ok' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

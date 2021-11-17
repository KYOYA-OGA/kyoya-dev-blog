import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useForm } from 'react-hook-form'
// import axios, { AxiosRequestConfig } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type FormValues = {
  yourName: string
  yourEmail: string
  yourSubject: string
  yourMessage: string
  reCaptchaToken: string
}
export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmitForm = async (values) => {
    const reCaptchaToken = await executeRecaptcha('contactPage')
    // const config: AxiosRequestConfig = {
    //   method: 'POST',
    //   url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: { ...values, reCaptchaToken },
    // }
    const data = { ...values, reCaptchaToken }
    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      if (response.status === 200) {
        reset()
        toast.success(
          'お問い合わせありがとうございました。確認次第ご返信いたしますので今しばらくお待ちくださいませ。'
        )
      }
    } catch (error) {
      console.log(error)
      toast.error('エラーの模様です...。もう一度お試しください。')
    }
  }

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Contact
          </h1>
          <p className="md:text-lg leading-7 text-gray-700 dark:text-gray-300">
            お仕事のご依頼や記事の修正依頼などのお問い合わせはこちらからどうぞ。
          </p>
        </div>
        <div className="pt-6 md:pt-10">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="w-full md:w-3/4 mx-auto">
              <label
                htmlFor="yourName"
                className="text-lg block dark:text-gray-300 font-medium text-gray-700"
              >
                お名前
                <span className="bg-red-600 font-semibold text-white px-3 py-1 rounded-md ml-3 text-sm">
                  必須
                </span>
              </label>
              <input
                {...register('yourName', { required: '必須項目です' })}
                type="text"
                name="yourName"
                id="yourName"
                autoComplete="name"
                className="text-gray-900 text-base md:text-xl mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
              />
              {errors.yourName && (
                <p className="mt-3 text-red-600 font-semibold">{errors.yourName.message}</p>
              )}
            </div>
            <div className="mt-8 w-full md:w-3/4 mx-auto">
              <label
                htmlFor="yourEmail"
                className="text-lg block dark:text-gray-300 font-medium text-gray-700"
              >
                メールアドレス
                <span className="bg-red-600 font-semibold text-white px-3 py-1 rounded-md ml-3 text-sm">
                  必須
                </span>
              </label>
              <input
                {...register('yourEmail', {
                  required: '必須項目です',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'メールアドレスの形式で入力してください',
                  },
                })}
                type="email"
                name="yourEmail"
                id="yourEmail"
                autoComplete="email"
                className="text-gray-900 text-base md:text-xl mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
              />
              {errors.yourEmail && (
                <p className="mt-3 text-red-600 font-semibold">{errors.yourEmail.message}</p>
              )}
            </div>
            <div className="mt-8 w-full md:w-3/4 mx-auto">
              <label
                htmlFor="yourSubject"
                className="text-lg block dark:text-gray-300 font-medium text-gray-700"
              >
                件名
              </label>
              <input
                {...register('yourSubject')}
                type="text"
                name="yourSubject"
                id="yourSubject"
                className="text-gray-900 text-base md:text-xl mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
              />
            </div>
            <div className="mt-8 w-full md:w-3/4 mx-auto">
              <label
                htmlFor="yourMessage"
                className="text-lg block dark:text-gray-300 font-medium text-gray-700"
              >
                お問い合わせ内容
                <span className="bg-red-600 font-semibold text-white px-3 py-1 rounded-md ml-3 text-sm">
                  必須
                </span>
              </label>
              <textarea
                {...register('yourMessage', { required: '必須項目です' })}
                name="yourMessage"
                id="yourMessage"
                rows={10}
                className="text-gray-900 text-base md:text-xl mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
              />
              {errors.yourMessage && (
                <p className="mt-3 text-red-600 font-semibold">{errors.yourMessage.message}</p>
              )}
            </div>

            <div className="text-center mt-12">
              <button className="submit btn-primary w-1/2 md:w-1/3">送信する</button>
            </div>

            <div className="mt-10 text-center">
              このサイトは reCAPTCHA によって保護されており、Googleの
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 hover:text-blue-400"
              >
                プライバシーポリシー
              </a>
              と
              <a
                href="https://policies.google.com/terms"
                className="text-blue-600 hover:text-blue-400"
              >
                利用規約
              </a>
              が適用されます。
            </div>
          </form>
        </div>
      </div>
      <div>
        <ToastContainer position="top-center" />
      </div>
    </>
  )
}

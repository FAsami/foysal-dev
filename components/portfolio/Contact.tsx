import { RiContactsLine } from 'react-icons/ri'
import { FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'
import { message } from 'antd'
import tw from 'twin.macro'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.sendForm(
        'service_qojn1jx',
        'template_3ypnqce',
        formRef.current || '',
        'xQpA7Najo689lo1qg'
      )
      setSending(false)
      message.success('Message sent!')
    } catch (error) {
      setSending(false)
      message.error('Something went wrong')
    }
  }

  return (
    <div tw="flex flex-col w-full justify-start bg-white overflow-y-auto scroll-smooth max-w-screen-md mx-auto">
      <h2 tw="justify-center text-4xl flex gap-2 items-center pt-56 pb-12">
        <RiContactsLine tw="text-4xl" />
        contact
      </h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <div tw="flex gap-4 flex-col">
          <div>
            <div tw="mb-1 text-gray-600">Full Name</div>
            <input
              tw="w-full h-16 text-xl pl-4 border placeholder:text-gray-300 rounded-md"
              type="text"
              name="user_name"
              placeholder="John Doe or Jane Doe"
              required={true}
            />
          </div>
          <div>
            <div tw="mb-1 text-gray-600">Email Address</div>
            <input
              tw="w-full h-16 text-xl pl-4 border placeholder:text-gray-300 rounded-md"
              type="email" // Use 'email' type for email input
              placeholder="example@email.com"
              name="user_email"
              required={true}
            />
          </div>
          <div>
            <div tw="mb-1 text-gray-600">Message for me</div>
            <textarea
              tw="w-full text-xl pl-4 border h-48 placeholder:text-gray-300 rounded-md"
              placeholder="Howdy !  "
              cols={10}
              rows={10}
              name="message"
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={sending}
            tw="bg-indigo-950 text-white text-2xl px-4 py-2 flex items-center justify-center border-none outline-none gap-4 rounded-md cursor-pointer disabled:opacity-30"
          >
            SEND <FiSend />{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export { Contact }

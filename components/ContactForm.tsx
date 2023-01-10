import { useState } from 'react'
import { sendMail } from '../lib/api'

type Props = {
  setIsSent: (active: boolean) => void
}

export default function ContactForm({ setIsSent }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [investment, setInvestment] = useState('')

  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function isValidPhone(phone: string) {
    return phone.length >= 10
  }

  const validateFields = (email: string, phone: string) => {
    if (!isValidEmail(email)) {
      setEmailError('Email is invalid')
      setTimeout(() => {
        setEmailError('')
      }, 3000)
      return false
    }
    if (!isValidPhone(phone)) {
      setPhoneError('Phone must be at least 10 characters.')
      setTimeout(() => {
        setPhoneError('')
      }, 3000)
      return false
    }
    return true
  }

  // const formObj = {
  //   name,
  //   email,
  //   phone,
  //   projectDetails,
  //   investment,
  // }
  const handleSubmit = async () => {
    if (!validateFields(email, phone)) {
      return
    }
    const emailContent = `
      Message received from <strong>${name}</strong>.
      Their email address is <strong>${email}</strong>.
      Their phone number is <strong>${phone}</strong>. <br />
      Here are the project details...
      ${projectDetails} <br />
      And their investment level is ...
      ${investment}
    `
    const data = await sendMail(
      'New message from website contact form',
      emailContent
    )

    if (data.sent) {
      // email was sent successfully!
      setIsSent(true)
    }

    setName('')
    setEmail('')
    setPhone('')
    setProjectDetails('')
    setInvestment('')
  }

  return (
    <div className="py-12">
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">First and last name</span>
            <input
              type="text"
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              placeholder=""
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              placeholder="john@example.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            {emailError && <h2 style={{ color: 'red' }}>{emailError}</h2>}
          </label>
          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="text"
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              placeholder=""
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            {phoneError && <h2 style={{ color: 'red' }}>{phoneError}</h2>}
          </label>
          <label className="block">
            <span className="text-gray-700">Project details</span>
            <textarea
              rows={4}
              className="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              value={projectDetails}
              onChange={({ target }) => setProjectDetails(target.value)}
            ></textarea>
          </label>
          <label className="block">
            <span className="text-gray-700">
              What level of investment are you looking to make?
            </span>
            <select
              className="
              block
              w-full
              mt-1
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              value={investment}
              onChange={({ target }) => setInvestment(target.value)}
            >
              <option value=""></option>
              <option value="Less than $1,000">Less than $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="More than $25,000">More than $25,000</option>
            </select>
          </label>
          <div className="flex mt-2 justify-end">
            <button
              className="border-black border py-3 px-12 bg-black text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

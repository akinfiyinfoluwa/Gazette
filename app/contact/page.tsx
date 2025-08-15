import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactForm'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Contact() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Feel free to reach out to us!
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Our Address
              </h2>
              <div className="text-gray-500 dark:text-gray-400">
                <p>123 Main Street</p>
                <p>Anytown, USA 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

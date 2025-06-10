export const metadata = {
  title: "Contact Us - Elevate HR",
  description:
    "Get in touch with Elevate HR for all your HR needs. We're here to assist you with questions, support, and inquiries.",
  openGraph: {
    title: "Contact Us - Elevate HR",
    description:
      "Reach out to Elevate HR for expert human resources support and solutions tailored to your business.",
    url: "https://www.elevatehr.com/contact",
    siteName: "Elevate HR",
    type: "website",
  },
};

export default function ContactUs() {
  return (
    <div className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col flex-1 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          We&apos;re here to help. Reach out to us with any questions or
          inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Office Hours */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@elevatehr.com
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 16.847V17a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
                  </svg>
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  123 HR Avenue, Suite 100 <br /> Innovate City, ST 54321
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Office Hours
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

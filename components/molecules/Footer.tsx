// components/Footer.jsx

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="bg-black text-white rounded-3xl md:p-16 p-8 shadow-xl">
        {/* Logo and Tagline */}
        <div className="mb-10">
          <h1 className="text-red-500 text-6xl font-bold mb-6">Stardew Labs</h1>
          <p className="text-xl">
            The next big thing starts here—<br />
            drop us a line and let&apos;s get creating!
          </p>
        </div>
        
        {/* Divider line */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Contact information grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="uppercase text-sm font-medium text-red-500">Phone</span>
            </div>
            <a href="tel:+91 8910757287" className="text-white">+91 8910757287</a>
          </div>
          
          {/* Email */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="uppercase text-sm font-medium text-red-500">Email</span>
            </div>
            <a href="mailto:dhruv@stardewlabs.com" className="text-white">dhruv@stardewlabs.com</a>
          </div>
          
          {/* Address */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="uppercase text-sm font-medium text-red-500">Address</span>
            </div>
            <p>Lucknow, India</p>
          </div>
          
          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="uppercase text-sm font-medium text-red-500">Opening Hours</span>
            </div>
            <p>Mon to Sat: 9.00am - 8.30pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Copyright and credits */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>©Foxus Technology Private Limited</p>
          </div>
          <div>
            <p>Built with ❤️ using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className=" underline underline-offset-2">Next.js</a></p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
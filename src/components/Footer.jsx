import React from 'react'

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800 mt-16">
        © {new Date().getFullYear()} AITools — Innovate Smarter with AI.
      </footer>
    </>
  )
}

export default Footer
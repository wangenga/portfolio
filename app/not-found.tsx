import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#4b2ee1] to-[#9270ff] bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Link href="/" className="inline-block px-5 py-2 rounded-md bg-[#4b2ee1] text-white hover:opacity-90 transition">
          Return Home
        </Link>
      </div>
    </div>
  )
}



import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TripX - Your Travel Companion</title>
        <meta name="description" content="Plan your perfect trip with TripX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to TripX
        </h1>
        <p className="text-center text-gray-600">
          Your ultimate travel planning platform
        </p>
      </main>
    </div>
  )
} 
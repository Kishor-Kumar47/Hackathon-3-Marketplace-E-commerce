
import Navbarr from '@/components/Navbar'
import { auth, currentUser } from '@clerk/nextjs/server'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const { userId } = await auth()
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>
  }
  console.log(user)

  return (
    <main>
      <Navbarr userId={userId} bgColor="bg-white" />

      <main className=" min-h-screen">
      {/* Header */}
      <header className=" shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile */}
          <section className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <Image
                src={user.imageUrl}
                alt='image'
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">{user.username}</h2>
                <p className="text-gray-600">{user.emailAddresses[0].emailAddress}</p>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </section>

          {/* Quick Links */}
          <section className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/orders"
                className="block p-4 bg-blue-100 text-blue-600 font-bold rounded-lg hover:bg-blue-200"
              >
                My Orders
              </Link>
              <Link
                href="/wishlist"
                className="block p-4 bg-green-100 text-green-600 font-bold rounded-lg hover:bg-green-200"
              >
                Wishlist
              </Link>
              <Link
                href="/account-settings"
                className="block p-4 bg-yellow-100 text-yellow-600 font-bold rounded-lg hover:bg-yellow-200"
              >
                Account Settings
              </Link>
              <Link
                href="/logout"
                className="block p-4 bg-red-100 text-red-600 font-bold rounded-lg hover:bg-red-200"
              >
                Logout
              </Link>
            </div>
          </section>

          {/* Order Summary */}
          <section className=" hidden md:block bg-white rounded-lg shadow p-6 lg:col-span-3">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2 text-left text-gray-600">Order ID</th>
                  <th className="border-b p-2 text-left text-gray-600">Name</th>
                  <th className="border-b p-2 text-left text-gray-600">Total</th>
                  <th className="border-b p-2 text-left text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2 text-gray-800">{user.id}</td>
                  <td className="border-b p-2 text-gray-600">{user.username}</td>
                  <td className="border-b p-2 text-gray-800">$120.00</td>
                  <td className="border-b p-2 text-green-600 font-bold">Completed</td>
                </tr>
                <tr>
                  <td className="border-b p-2 text-gray-800">{user.id}</td>
                  <td className="border-b p-2 text-gray-600">{user.username}</td>
                  <td className="border-b p-2 text-gray-800">$85.50</td>
                  <td className="border-b p-2 text-yellow-600 font-bold">Pending</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </main>
    </main>
  )
}

export default page
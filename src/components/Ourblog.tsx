import Image from 'next/image';
import Link from 'next/link'
import React from 'react'









const Ourblog = () => {

    const blogPosts = [
        {
          id: 1,
          image: "/blog-img-1.png",
          title: "Going all-in with millennial design",
          category: "Design",
          time: "5 min",
          date: "12th Oct 2022",
          link: "#",
        },
        {
          id: 2,
          image: "/blog-img-2.png",
          title: "The 400 Blows",
          category: "Film",
          time: "4 min",
          date: "14th Oct 2022",
          link: "#",
        },
        {
          id: 3,
          image: "/blog-img-3.png",
          title: "Shooting Stars",
          category: "Photography",
          time: "6 min",
          date: "15th Oct 2022",
          link: "#",
        },
      ];
      


  return (
    <section className="py-12 bg-white">
  <div className="container mx-auto px-5">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Blogs</h2>
      <p className="text-gray-500">Find a bright idea to suit your taste with our great selection</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
          width={300}
          height={200}
            className="w-full h-56 object-cover"
            src={post.image}
            alt={post.title}
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="mr-4 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m3-3h4m-4 0a2 2 0 00-4 0m4 0a2 2 0 004 0"
                  />
                </svg>
                {post.time}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3M16 3h-4m0 0H9a2 2 0 00-2 2v4h10V5a2 2 0 00-2-2z"
                  />
                </svg>
                {post.date}
              </span>
            </div>
            <Link
              href={post.link}
              className="text-black hover:underline font-medium text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <Link
        href="#"
        className="text-black hover:underline font-medium text-sm"
      >
        View All Posts
      </Link>
    </div>
  </div>
</section>


  )
}

export default Ourblog
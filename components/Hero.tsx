'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === posts.length - 1 ? 0 : prevSlide + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearTimeout(timer)
  }, [currentSlide, posts.length])

  if (!posts || posts.length === 0) {
    return <div>No posts to display</div>
  }

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg">
      {posts.map((post, index) => (
        <div
          key={post.slug}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={post.images[0]}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
          <div className="absolute inset-0 rounded" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-tl from-gray-800 to-transparent bg-opacity-50 p-6">
            <h2 className="text-3xl font-bold px-1.5">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="mt-4 rounded-full bg-primary-500 px-6 py-2 text-lg font-semibold hover:bg-primary-600">
                Read More
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Hero

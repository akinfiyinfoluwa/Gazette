'use client'

import { useState } from 'react'

const LikeButton = () => {
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1)
      setLiked(true)
    } else {
      setLikes(likes - 1)
      setLiked(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleLike}
        className={`rounded-md px-4 py-2 text-white ${
          liked ? 'bg-red-500' : 'bg-blue-500'
        } focus:outline-none focus:ring-2 ${
          liked ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
      <span>{likes} Likes</span>
    </div>
  )
}

export default LikeButton

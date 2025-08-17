'use client'

import { useState } from 'react'

interface Comment {
  id: number
  name: string
  text: string
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [newName, setNewName] = useState('')

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim() && newName.trim()) {
      setComments([...comments, { text: newComment, name: newName, id: Date.now() }])
      setNewComment('')
      setNewName('')
    }
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        Comments
      </h2>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="mb-2 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Your name"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Add a comment..."
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
          >
            <p className="font-bold text-gray-800 dark:text-gray-200">{comment.name}</p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection

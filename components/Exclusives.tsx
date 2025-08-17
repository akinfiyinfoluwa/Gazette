import PostCard from './PostCard'

const Exclusives = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No exclusive posts to display</div>
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        Exclusives
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Exclusives

import PostCard from './PostCard'

const PostSection = ({ posts, title }) => {
  if (!posts || posts.length === 0) {
    return <div>No posts to display</div>
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostSection

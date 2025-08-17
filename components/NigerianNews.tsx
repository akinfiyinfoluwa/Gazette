import PostCard from './PostCard'
import NewsPostCard from './social-icons/templates/Newspostcard'

const NigerianNews = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No news to display</div>
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
       Special Stories
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 py-3">
        {posts.slice(0, 2).map((post) => (
          <NewsPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export default NigerianNews

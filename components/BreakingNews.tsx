import Link from 'next/link'
import Image from 'next/image'

const BreakingNews = ({ post }) => {
  if (!post) {
    return <div>No breaking news to display</div>
  }

  return (
    <div className="relative h-96 w-full overflow-hidden">
      <Image
        src={post.images[0]}
        alt={post.title}
        layout="fill"
        objectFit="cover"
        className="h-full w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold">{post.title}</h2>
        <Link href={`/blog/${post.slug}`} legacyBehavior>
          <a className="mt-4 rounded-full bg-primary-500 px-6 py-2 text-lg font-semibold hover:bg-primary-600">
            Read More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default BreakingNews

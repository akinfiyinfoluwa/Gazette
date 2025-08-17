import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from '@/components/Image'

const NewsPostCard = ({ post }) => {
  const { slug, date, title, summary, tags } = post

  return (
    <article className="group relative flex flex-col space-y-2">
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <h2 className="text-2xl font-bold leading-8 tracking-tight">
        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
          {title}
        </Link>
      </h2>
      <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
        </dd>
      </dl>
    </article>
  )
}

export default NewsPostCard

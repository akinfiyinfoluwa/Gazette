import Hero from '@/components/Hero'
import BreakingNews from '@/components/BreakingNews'
import Exclusives from '@/components/Exclusives'
import NigerianNews from '@/components/NigerianNews'
import PostSection from '@/components/PostSection'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  const heroPosts = posts.slice(0, 3)
  const breakingNewsPost = posts.find((post) => post.tags.includes('Breaking News'))
  const exclusivePosts = posts.filter((post) => post.tags.includes('Exclusive'))
  const nigerianNewsPosts = posts.filter((post) => post.tags.includes('Nigerian News'))
  const regularPosts = posts.filter(
    (post) =>
      !post.tags.includes('Breaking News') &&
      !post.tags.includes('Exclusive') &&
      !post.tags.includes('Nigerian News')
  )

  return (
    <>
      <Hero posts={heroPosts} />
      <PostSection posts={regularPosts.slice(0, 3)} title="Latest News" />
      {breakingNewsPost && <BreakingNews post={breakingNewsPost} />}
      <Exclusives posts={exclusivePosts} />
      <NigerianNews posts={nigerianNewsPosts} />
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

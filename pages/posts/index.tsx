import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/post/getPost'


export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allPosts)
  return (
    <div>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]" >
              <p className="text-lg leading-6 font-bold">{post.title}</p>
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(['slug', 'title', 'excerpt', 'authorId',"tags"])
  console.log(allPosts)
  return {
    props: {},
  }
}

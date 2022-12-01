import useSWR from 'swr'

async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}
export default function useAllTag() {
  const { data: posts, mutate } = useSWR<any>(
    `/api/post/getAllTag`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  const postsToTags = (posts)=>{
    if(posts){
        const __tags = posts.map(({tags})=>(tags))
        const _tags = new Array(...(new Set(__tags.flat(1))))
        const tags = _tags.map(tag=>{
          const data = posts.filter(post=>{
              return post.tags.includes(tag)    
          })
          return {
            tag,
            posts:data
          }
        })
        return tags
    }
    return posts
}
  return postsToTags(posts)
}

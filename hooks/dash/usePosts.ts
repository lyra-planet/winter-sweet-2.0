import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function usePosts() {
  const { data: posts, mutate } = useSWR<any>(
    `/api/dash/post`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return posts
}

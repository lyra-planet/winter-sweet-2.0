import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}
export default function useAllPost() {
  const { data: posts, mutate } = useSWR<any>(
    `/api/post/getAllPost`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return posts
}

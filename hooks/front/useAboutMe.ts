import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}
export default function useAboutMe() {
  const { data: posts, mutate } = useSWR<any>(
    `/api/post/getAboutMe`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return posts
}

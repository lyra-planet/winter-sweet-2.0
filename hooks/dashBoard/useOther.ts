import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function useOther() {
  const { data: posts, mutate } = useSWR<any>(
    `/api/other/get`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return posts
}

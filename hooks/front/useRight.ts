import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}
export default function useRight() {
  const { data: data, mutate } = useSWR<any>(
    `/api/post/getRight`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return data
}

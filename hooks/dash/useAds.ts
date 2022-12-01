import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function useAds() {
  const { data: items, mutate } = useSWR<any>(
    `/api/dash/other/ad`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return {items,mutate}
}


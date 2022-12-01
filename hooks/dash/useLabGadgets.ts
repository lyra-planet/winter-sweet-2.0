import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function useLabGadget() {
  const { data: items, mutate } = useSWR<any>(
    `/api/dash/other/labGadget`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return {items,mutate}
}


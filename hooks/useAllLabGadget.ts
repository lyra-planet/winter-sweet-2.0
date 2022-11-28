import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}
export default function useAllLabGadget() {
  const { data: labGadget, mutate } = useSWR<any>(
    `/api/other/getAllLabGadget`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return labGadget
}

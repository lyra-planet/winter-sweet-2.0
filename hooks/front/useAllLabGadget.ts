import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function useAllLabGadget() {
  const { data: labGadget, mutate } = useSWR<any>(
    `/api/front/other/labGadget`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return labGadget
}

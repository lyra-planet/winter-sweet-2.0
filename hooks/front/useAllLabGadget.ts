import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET",body:JSON.stringify({status:0})
  }).then((res) => res.json())
}
export default function useAllLabGadget() {
  const { data: labGadget, mutate } = useSWR<any>(
    `/api/other/labGadget`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return labGadget
}

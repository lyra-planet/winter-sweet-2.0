import useSWR from 'swr'


async function fetcher(url: string) {
  const queryUrl = url
  return fetch(queryUrl,{
    method:"GET"
  }).then((res) => res.json())
}
export default function useAllFriend() {
  const { data: friends, mutate } = useSWR<any>(
    `/api/front/other/friend`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  return friends
}

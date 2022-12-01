import useSWR from 'swr'
import useAds from './useAds'
import useFriends from './useFriends'
import useLabGadget from './useLabGadgets'



export default function useOther() {
  const {items:ads,mutate:adsMutate} = useAds()
  const {items:friends,mutate:friendsMutate} = useFriends()
  const {items:labGadgets,mutate:labGadgetsMutate} = useLabGadget()
  return {
    ads:{items:ads,mutate:adsMutate},
    friends:{items:friends,mutate:friendsMutate},
    labGadgets:{items:labGadgets,mutate:labGadgetsMutate}
  }
}


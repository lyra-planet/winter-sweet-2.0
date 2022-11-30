import React from 'react'
import useRight from '../../hooks/useRight'
import Ad from './ad'
import Item from './item'

const index = () => {
  const data = useRight()
  console.log(data)
  return (
    <div className='p-4 space-y-5 sticky top-0 animate-silderighttoleft'>

      <section>
      <p className=' bg-black text-white inline-block text-xs p-1 border-b-2 border-red-500'>Lyra.Selection</p>
      <ul>
        {
         data.posts&&data.posts.map(item=><Item item={item}/>)
        }
      </ul>
      </section>

      <section>
      <p className=' bg-black text-white inline-block text-xs p-1 border-b-2 border-red-500'>
      Lyra.Advertising</p>
      <ul>
      {data.ad?.[0]&&<Ad item={data.ad[0]}/>}
      </ul>
      </section>

    </div>
  )
}

export default index
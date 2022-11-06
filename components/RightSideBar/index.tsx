import React from 'react'
import Ad from './ad'
import Item from './item'

const index = () => {


  return (
    <div className='p-4 space-y-5 sticky top-0 animate-silderighttoleft'>

      <section>
      <p className=' bg-black text-white inline-block text-xs p-1 border-b-2 border-red-500'>Lyra.Selection</p>
      <ul>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      </ul>
      </section>

      <section>
      <p className=' bg-black text-white inline-block text-xs p-1 border-b-2 border-red-500'>
      Lyra.Advertising</p>
      <ul>
      <Ad/>
      <Ad/>
      <Ad/>
      <Ad/>
      </ul>
      </section>

    </div>
  )
}

export default index
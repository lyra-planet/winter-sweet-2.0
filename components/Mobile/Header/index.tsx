import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashBoard from '../Dashboard'
const index = () => {
    const [active,setActive]=useState(false)
    const {pathname} = useRouter()
    useEffect(() => {
        setActive(false)
    },[pathname])
  return (
    <div className='sticky z-50 top-0 md:hidden '>
        <div className='bg-red-500 h-10 flex items-center justify-between bg-clip-border'>
        <section className='text-white flex font-semibold cursor-pointer translate-y-[-0.3rem]'>
            <Link href={'/'}>
            <p></p>
                 <p>Lyra.Planet</p>
            </Link>
        </section>
        <section className='translate-y-[-0.2rem]'>
            <div>
                <button className={`group/btn space-y-[4px] cursor-pointer ${active?'active':''}`} onClick={()=>setActive(active=>!active)}>
                    <div className='bg-white w-[21px] h-[3px]
                    group-[.active]/btn:rotate-45 origin-top-left duration-150
                    '></div>
                    <div className='bg-white w-[21px] h-[3px]
                    group-[.active]/btn:w-0 duration-150
                    '></div>
                    <div className='bg-white w-[21px] h-[3px]
                    group-[.active]/btn:rotate-[-45deg] origin-bottom-left duration-150
                    '></div>
                </button>
            </div>
        </section>
        </div>
        <div className={`relative ${active?'active':''} group/list h-full`}>
        <div className='
        absolute bg-red-500 right-0 top-0
            transition duration-150 scale-0  
            h-screen w-full
            translate-x-full
            group-[.active]/list:scale-100
            group-[.active]/list:translate-x-0
            bg-clip-border
            '>
            <DashBoard/>
            </div>
    </div>
    </div>
  )
}

export default index
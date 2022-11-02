import React from 'react'
import Item from './item'
import { Email, Fun, Github,Netease,QQ, Telegram, Terminal } from '../../assets'
const index = () => {
  return (
    <div className='bg-radial'>
      <div className='px-8 lg:flex lg:justify-around'>
        <section className='py-8 border-b lg:w-1/3 font-semibold'>
        ‌待在Lab里无所事事的时间，果汁入口的时候，走在街上的一瞬，在某时某刻与某人接吻的时候，就算不是时常也好，就算一百次中只有一次也好，希望你能够想起我，因为我就身在那里。 
        </section>
        <section className='lg:w-1/2 flex flex-row justify-between py-8'>
          <section>
            <h1 className='font-bold text-sm'>订阅</h1>
          <ul>
            <Item link={'/'}><Fun className="w-4 mr-1"/>小星球</Item>
            <Item link={'/'}><Terminal className="w-4 mr-1"/> 掘金</Item>
            <Item link={'/'}><Netease className="w-4 mr-1"/>网易云音乐</Item>
          </ul>
          </section>
          <section>
          <h1 className='font-bold text-sm'>关注</h1>
            <ul>
            <Item link={'/'}><Email className="w-4 mr-1"/>E-mail</Item>
            <Item link={'/'}><Telegram className="w-4 mr-1"/>Telegram</Item>
            <Item link={'/'}><QQ className="w-4 mr-1"/>QQ</Item>
            <Item link={'/'}><Github className="w-4 mr-1"/>GitHub</Item>
          </ul>
            </section>
            <section>
            <h1 className='font-bold text-sm'>Not Fun Fact</h1>
            <p className='w-30 text-neutral-500 text-sm font-serif'>本站已运行总计 
            <span className='text-red-500 font-bold'>
            159 
            </span>
            小时</p>
            </section>
        </section>
      </div>


 </div>
  )
}

export default index
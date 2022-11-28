import React, { useEffect, useRef } from 'react'
import Item from './item'
import { Email, Fun, Github,Netease,QQ, Telegram, Terminal } from '../../assets'
import {distanceToNow, distanceToNowHour} from '../../lib/dateRelative'
import config from '../../config'

const index = () => {
  const yiyan = useRef(null)
  const creater = useRef(null)
  useEffect(() => {
    fetch('https://v1.hitokoto.cn?c=a&c=c&min_length=30')
    .then(response => response.json())
    .then(data => {
      yiyan.current.innerText = data.hitokoto
      creater.current.innerText = "--" + data.from
    })
    .catch(console.error)
  }, [])
  return (
    <div className='bg-radial pb-10'>
      <div className='px-8 lg:flex lg:justify-around'>
        <section  className='py-8 lg:w-1/3 font-semibold'>
        <p ref={yiyan}>
        ‌待在Lab里无所事事的时间，果汁入口的时候，走在街上的一瞬，在某时某刻与某人接吻的时候，就算不是时常也好，就算一百次中只有一次也好，希望你能够想起我，因为我就身在那里。 
        </p>
        <p className='w-full justify-end flex' ref={creater}>--xxx</p>
        </section>
        <section className='lg:w-1/2 flex flex-row justify-between py-8'>
          <section>
            <h1 className='font-bold text-sm'>交流&探讨</h1>
          <ul>
            <Item link={config.links.littlePlanet}><Fun className="w-4 mr-1"/>小星球</Item>
            <Item link={config.links.jueJin}><Terminal className="w-4 mr-1"/> 掘金</Item>
            <Item link={config.links.netease}><Netease className="w-4 mr-1"/>网易云音乐</Item>
          </ul>
          </section>
          <section>
          <h1 className='font-bold text-sm'>联系&关注</h1>
            <ul>
            <Item link={config.links.email}><Email className="w-4 mr-1"/>E-mail</Item>
            <Item link={config.links.telegram}><Telegram className="w-4 mr-1"/>Telegram</Item>
            <Item link={config.links.qq}><QQ className="w-4 mr-1"/>QQ</Item>
            <Item link={config.links.github}><Github className="w-4 mr-1"/>GitHub</Item>
          </ul>
            </section>
            <section>
            <h1 className='font-bold text-sm'>Not Fun Fact</h1>
            <p className='w-30 text-neutral-500 text-sm font-serif'>本站已运行总计 
            <span className='text-red-500 font-bold'>
            {distanceToNowHour(config.system.startTime)}
            </span>
            小时</p>
            </section>
        </section>
      </div>


 </div>
  )
}

export default index
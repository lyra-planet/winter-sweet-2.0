import React from 'react'
import useAboutMe from '../../hooks/useAboutMe'
import Comment from '../Comment'
import Loading from './loading'


const index = () => {
  const posts = useAboutMe()
  return (
    <section className='w-full'>
    <section>
      {
        typeof posts !== 'boolean' ? <div className='prose ' dangerouslySetInnerHTML={{ __html: posts?.[0]?.content }}/>:(
          <Loading/>
        )
      }
    </section>
    <section>
      <Comment postId={""} linkTo={"/about"}/>
    </section>     
    </section>
  )
}

export default index
import React, { useState } from 'react'
import AdForm from '../../../components/DashBoard/Other/Ad/form'
import Layout from '../../../components/DashBoard/layout'
import LFForm from '../../../components/DashBoard/Other/LFForm'
import Modal from '../../../components/Modal'
import useOther from '../../../hooks/dash/useOther'
import Item from '../../../components/DashBoard/Other/item'
import { GetServerSideProps } from 'next'
import { getRefreshTokenByToken } from '../../../lib/token'
const index = () => {
  const [which,setWhitch] = useState(0)
  const [create,setCreate] = useState(false)
  const [listItem,setListItem] = useState({
    type:-1,index:-1
  })
  const other = useOther()

  const [modal,setModal] = useState({
    active:0,text:"",type:1
  })
  const restModal = ()=>{
    setTimeout(()=>{
    setModal({...modal,
        active:0
    })
    },1500)
  }

  const onSubmit = async(pack,type)=>{
    setModal({active:1,text:"上传中",type:2})
    const data = await fetch(`/api/other/${type}`,{
        method:"POST",
        body:JSON.stringify(pack)
      }).then(res=>res.json())
      if( data.status=== 'succeed' ){
        setModal({active:1,text:"上传成功",type:1})
        restModal()
        other[which===0?'ads':which===1?'labGadgets':'friends'].mutate()
      }
  }
  const Chose=({index,children})=>{
    return <div
    onClick={()=>setWhitch(index)}
    className={`border-b p-1 text-xs md:text-base cursor-pointer ${which===index?"bg-red-500 text-white":"hover:bg-neutral-100"}`}>{children}</div>
  }
  const option = [
    {
        name:"小广告",
        type:"ad",
        Form:AdForm
    },
    {
        name:"小玩具",
        type:"labGadget",
        Form:LFForm
    },
    {
        name:"朋友",
        type:"friend",
        Form:LFForm
    },
  ]
  const List = ({type,arr})=>{
    return <div className='h-full'>
            <div className='text-red-500 font-bold h-[5%]'>
                {type===0?'Ads':type===1?'LabGadgets':'Friends'}
            </div>
            <section className='h-[95%] overflow-auto scrollbar-thin scrollbar-thumb-red-500'>
      <div className={`cursor-pointer font-semibold bg-radial border-b p-1 text-xs flex items-center `}>
      <div className='w-[30%] flex justify-center'>
      <p className={` inline-block p-0.5 text-sm rounded-md `}>
      Status
      </p>  
      </div>
      <p className='w-[30%] flex justify-center'>Name</p>
      <p className='w-[40%] flex justify-center'>CreateAt</p>
      </div>
            {
    arr?arr.map((item,index)=>{
    const active = listItem.type===which&&listItem.index===index
    return<div 
    onClick={()=>{
        setListItem(!active&&{type,index})
        if(!active){
            setCreate(true)
        }
        }}>
        <Item active={active} item={item}/>
    </div>
          }):<div>Loading</div>}
            </section>

    </div>
  }

  return (
  <section className='flex flex-col px-5 md:px-10  space-y-5 h-full w-full justify-center'>
    <Modal active={modal.active} text={modal.text} type={modal.type} />
    <section className='h-[5%] '>
        <h1 className="flex items-center space-x-2 text-xl md:text-3xl font-bold font-serif">
        <p>Lyra.Planet</p>
        <p className="w-2 h-2 bg-red-500"></p>
        <p>其他设置</p>
        </h1>
    </section>
    <section className='h-[95%] w-full flex flex-row'>
        <section className='w-1/4 h-full relative flex flex-col space-y-10  border-r pr-5'>
            <section className='space-y-2'>
            <div className='text-red-500 font-bold'>
                设置
            </div>
            <div className=''>
    {
        option.map((item,index)=><Chose 
        key={index}
        index={index}>{item.name}</Chose>)
    }
            </div>
            </section>
            <section className='mb-1'>
                <button onClick={()=>setCreate(!create)}
                className={` cursor-pointer
                ${create?"bg-red-500":" bg-radial border text-black"}
                 w-full text-white p-1 hover:scale-105 transition duration-150`}>
                列表
                </button>
            </section>
        </section>
        <section className='w-3/4 px-1 h-[75vh] overflow-hidden'>
        {
        create?option.map((item,index)=><div 
        key={index}
        className={`space-y-4 ${index===which? "block":"hidden"}`}>
            <div className='text-red-500 font-bold'>
                {item.name}
            </div>
            <item.Form onSubmit={onSubmit} type={item.type} data={index===listItem.type?
                other[which===0?'ads':which===1?'labGadgets':'friends'].items[listItem.index]
                :{}}/>
            </div>):other?<List type={which} arr={other[which===0?'ads':which===1?'labGadgets':'friends'].items}/>:<div>Loading</div>
        }
        </section>
    </section>
  </section>
  )
}
index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default index
export const getServerSideProps: GetServerSideProps = async ({req,res}) => {
  const refresh_token = req.cookies["refresh_token"]
  if(!refresh_token){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  const refreshToken = await getRefreshTokenByToken(refresh_token)
  if(! refreshToken){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {props:{}}
}
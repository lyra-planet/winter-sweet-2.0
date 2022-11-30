import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AdForm from '../../../components/DashBoard/Other/Ad/form'
import Layout from '../../../components/DashBoard/layout'
import LFForm from '../../../components/DashBoard/Other/LFForm'
import Upload from '../../../components/DashBoard/Upload/index.tsx'
import Modal from '../../../components/Modal'
import useOther from '../../../hooks/dashBoard/useOther'
import Item from '../../../components/DashBoard/Other/item'
const index = () => {
  const [modal,setModal] = useState(0)
  const [which,setWhitch] = useState(0)
  const [create,setCreate] = useState(false)
  const [listItem,setListItem] = useState({
    type:-1,index:-1
  })
  const other = useOther()
  const onSubmit = async(pack,type)=>{
    console.log(1)
    const data = await fetch(`/api/other/${type}`,{
        method:"POST",
        body:JSON.stringify(pack)
      }).then(res=>res.json())
      if( data.status=== 'succeed' ){
        setModal(1)
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
            {
    arr[type===0?'ads':type===1?'labGadgets':'friends'].map((item,index)=>{
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
  })}
            </section>

    </div>
  }

  return (
  <section className='flex flex-col px-5 space-y-5 h-full w-full justify-center'>
      <Modal active={modal} type={1}>上传成功</Modal>
    <section className='h-[5%] '>
        <h1 className="flex items-center space-x-2 text-xl md:text-3xl font-bold font-serif">
        <p>Lyra.Planet</p>
        <p className="w-2 h-2 bg-red-500"></p>
        <p>其他设置</p>
        </h1>
    </section>
    <section className='h-[95%] w-full flex flex-row'>
        <section className='w-1/4 h-full relative flex flex-col justify-between  border-r pr-5'>
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
                other[which===0?'ads':which===1?'labGadgets':'friends'][listItem.index]
                :{}}/>
            </div>):other?<List type={which} arr={other}/>:<div>Loading</div>
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
import Link from 'next/link'
import { useRef } from 'react';

const clickCopy = ({link,children}:{link:string,children:any}) => {
    const textareaRef = useRef(null)
    const copyText = ()=> {
        var input = textareaRef.current;
        input.value = link;
        input.select();//选中文本
        console.log(input)
        document.execCommand("copy");
        alert("复制了Email :)")
    }
    return (
    <button onClick={()=>copyText()}>
    <li className='w-full 
    flex items-center border-b h-8
    text-xs
    font-normal text-neutral-500
    hover:text-red-500 hover:border-b-red-500 transition duration-300'>
    <textarea className=' absolute opacity-0 w-0 h-0' ref={textareaRef}></textarea>
    {children}
    </li>
    </button>
  )
}

export default clickCopy
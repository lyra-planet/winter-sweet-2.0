import Link from 'next/link'
import { useRef } from 'react';

const clickCopy = ({link,children}:{link:string,children:any}) => {
    const textRef = useRef(null)
    const textareaRef = useRef(null)
    const copyText = ()=> {
        var text = textRef.current.innerHTML;
        var input = textareaRef.current;
        input.value = text;
        input.select();//选中文本
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
    <p className='hidden' ref={textRef}>{link}</p>
    <textarea className='hidden' ref={textareaRef}></textarea>
    {children}
    </li>
    </button>
  )
}

export default clickCopy
import { useRef } from 'react';

const FooterClickCopy = ({link,children}:{link:string,children:any}) => {
    const textareaRef = useRef(null)
    const copyText = ()=> {
        var input = textareaRef.current;
        input.value = link;
        input.select();//选中文本
        document.execCommand("copy");
        alert("复制了Email :)")
    }
    return (
    <button onClick={()=>copyText()}>
    <li className='inline-flex
    items-center border-b h-8
    text-xs mr-2 cursor-pointer
    font-normal text-white
    border-dotted
    hover:text-red-500 
    hover:bg-white 
    hover:border-b-red-500
    transition duration-300'>
    <textarea className='absolute opacity-0 top-0 left-0'  ref={textareaRef} value={link}></textarea>
    {children}
    </li>
    </button>
  )
}

export default FooterClickCopy
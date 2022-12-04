import { useRef } from 'react';

const FooterClickCopy = ({link,children}:{link:string,children:any}) => {
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
    <li className='inline-flex
    items-center border-b h-8
    text-xs mr-2
    font-normal text-white
    border-dotted
    hover:text-red-500 
    hover:bg-white 
    hover:border-b-red-500
    transition duration-300'>
    <p className='hidden' ref={textRef}>{link}</p>
    <textarea className='hidden' ref={textareaRef}></textarea>
    {children}
    </li>
    </button>
  )
}

export default FooterClickCopy
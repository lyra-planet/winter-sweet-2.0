import type { Post } from "../../interfaces";
import matter from "gray-matter"

export const matterPost = (source:string)=>{
    const {data:{title,tags:_tags},content} = matter(source)
    if(!_tags||!title||!content){
        return false
    }
    const tags = _tags.toString().split(' ')
    const excerpt = matter(source,{excerpt_separator: '<!-- end -->'}).excerpt.split('<!-- mid -->')
    if(title.length===0||excerpt.length!==2||tags.length===0||content.length===0){
        return false
    }
    return {
        title:title.toString(),tags,excerpt,content
    }
}
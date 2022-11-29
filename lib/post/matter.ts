import type { Post } from "../../interfaces";
import matter from "gray-matter"

export const matterPost = (source:string)=>{
    const {data:{title, excerpt,tags},content} = matter(source)
    const items: Post = {};
    if(title.length===0||excerpt.length!==2||tags.length===0||content.length===0){
        return false
    }
    return {
        title,tags,excerpt,content
    }
}
import {  formatMonth } from '../lib/dateRelative';


const useBlogList = (posts)=>{
    const timeLine = []
    let beforeTime = ''
    posts.map(post=>{
        const time = formatMonth(post.createdAt)
        if(time!==beforeTime){
            beforeTime = time
            timeLine.push({
                time:time,
                posts:[]
            })
        }
        timeLine[timeLine.length-1].posts.push(post)
    })
    return timeLine
}
export default useBlogList
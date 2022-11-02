import { Author } from "../interfaces"
export interface IAuthorStore{
    authorInfo:Author,
    setAuthorInfo:(value:Author)=>void
}

const authorStore=():IAuthorStore => {
return {
    authorInfo:{},
    setAuthorInfo: function(value){
        this.authorInfo=value
    }
}
}
export default authorStore
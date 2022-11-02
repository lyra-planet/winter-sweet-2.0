import { AccessToken } from "../interfaces"
export interface IAccessTokenStore{
    accessTokenInfo:AccessToken,
    setAccessTokenInfo:(value:AccessToken)=>void
}

const accessTokenStore=():IAccessTokenStore => {
return {
    accessTokenInfo:{},
    setAccessTokenInfo: function(value){
        this.accessTokenInfo=value
    }
}
}
export default accessTokenStore
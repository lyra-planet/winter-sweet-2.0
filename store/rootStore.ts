import userStore, {IUserStore} from "./userStore";
import authorStore, { IAuthorStore } from './authorStore';
import { IAccessTokenStore } from "./accessTokenStore";
import accessTokenStore from './accessTokenStore';

export interface IStore{
    user:IUserStore,
    author:IAuthorStore,
    accessToken:IAccessTokenStore
}


const createStore=(initialValue:any):()=>IStore=>{
    return ()=>{
        return {
            user:{...userStore(),...initialValue?.user},
            author:{...authorStore(),...initialValue?.author},
            accessToken:{...accessTokenStore(),...initialValue?.accessToken}
        }
    }
}

export default createStore
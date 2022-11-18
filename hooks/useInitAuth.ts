import { useState } from "react";
import { fetchApi } from "../lib/fetchApi";
import { useStore } from "../store";
import jwt_decode from "jwt-decode";
const useInitAuth = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const store = useStore();
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("/api/auth/refresh");
        const data = await res.json();
        if (data.status === "succeed") {
          store.accessToken.setAccessTokenInfo({ data: data.data.accessToken });
          resolve(data.data.accessToken )
        } else {
          reject(false)
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
  
        if (store.accessToken.accessTokenInfo.data) {
          
          const res = await fetchApi(
            "/api/auth/author",
            store.accessToken.accessTokenInfo.data,
            {
              method: "POST",
              body: JSON.stringify({
                accessToken: store.accessToken.accessTokenInfo.data,
              }),
            }
          );
          const data = await res.json();
       
          if (data.status === "succeed") {
            store.author.setAuthorInfo(data.data.author);
            resolve(true);
          } else {
            console.log(data.status);
            reject();
          }
          reject()
        }
        reject()
      } catch (error) {
        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken = store.accessToken.accessTokenInfo.data;
    if (!authToken) {
      return;
    }
    const jwt = jwt_decode(authToken);
    //@ts-ignore
    const newRefreshTime = jwt.exp - 60000;
    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setAuthLoading(true);
      try {
        await refreshToken();
        await getUser();
        reRefreshAccessToken();
        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setAuthLoading(false);
      }
    });
  };

  return { initAuth };
};

export default useInitAuth;

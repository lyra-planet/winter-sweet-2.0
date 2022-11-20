export const fetchApi = (url: RequestInfo | URL,authToken:string, options: RequestInit={}) => {
    console.log(authToken)
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${authToken}`
        }
    })
}
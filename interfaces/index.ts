export type User = {
  name: string
  picture: string
  sub: string
  email?: string
}

export type Comment = {
  id?:string,
  replyTo?: Post
  replyToId?: string
  linkTo?:string
  text: string
  userName: string,
  userPicture: string,
  userSub:string,
  userEmail: string,
}

export type Author = {
  id?           :string
  email?        :string
  name?         :string
  profileImage? :string
}
export type AccessToken ={
  data?:string
}
export type Post = {
  slug?: string
  title?: string
  author?: string
  date?: Date
  content?: string
  excerpt?: string
  [key: string]: any
}

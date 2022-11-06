import type { Comment } from '../../interfaces'
import Item from '../Comment/item'
import { useAuth0 } from '@auth0/auth0-react'

type CommentListProps = {
  comments?: Comment[]
  onDelete: (comment: Comment) => Promise<void>
}
export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { user } = useAuth0()
  return (
    <div className="space-y-4 my-5 overflow-auto h-full scrollbar-none border-b border-t">
      {comments &&
        comments.map((comment) => {
          const isAuthor = user && user.sub === comment.userSub
          const isAdmin =
            user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
          return (
            <Item key={comment.id} onDelete={onDelete} comment={comment} isAdmin={isAdmin} isAuthor={isAuthor}/>
          )
        })}
    </div>
  )
}

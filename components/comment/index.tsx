import CommentForm from '../Comment/form'
import CommentList from '../Comment/list'
import useComments from '../../hooks/useComment'

export default function Comment({postId}) {
  const { text, setText, comments, onSubmit, onDelete } = useComments(postId)

  return (
    <div className="w-full xl:sticky xl:top-0 py-10 lx:pt-20 xl:h-[70vh]">
      <div>
        评论
      </div>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  )
}

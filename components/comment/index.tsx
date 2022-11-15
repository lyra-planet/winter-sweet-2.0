import CommentForm from '../Comment/form'
import CommentList from '../Comment/list'
import useComments from '../../hooks/useComment'

export default function Comment({postId}) {
  const { text, setText, comments, onSubmit, onDelete } = useComments(postId)

  return (
    <div className="w-full xl:sticky xl:mb-[10rem] xl:top-0 pt-10 lx:pt-20 xl:h-[80vh]">
      <div>
        评论
      </div>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  )
}

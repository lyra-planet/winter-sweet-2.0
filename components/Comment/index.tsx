import CommentForm from './form'
import CommentList from './list'
import useComments from '../../hooks/useComment'

export default function Comment({postId}) {
  const { text, setText, comments, onSubmit, onDelete } = useComments(postId)

  return (
    <div className="w-full xl:sticky space-y-4 xl:mb-[10rem] xl:top-0 pt-10 lx:pt-20 xl:h-[80vh] pb-8">
    <div className="
    text-2xl font-bold flex items-center space-x-4
    "><p className="">评论</p><p className="border-b flex-grow"/></div>
          <div className="flex justify-start text-sm">
        <div className="bg-black p-1 text-white font-serif border-b-2 border-red-500">
         共有{comments.length}条评论
        </div>
      </div>
    <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
    <CommentList comments={comments} onDelete={onDelete} />
    </div>
  )
}

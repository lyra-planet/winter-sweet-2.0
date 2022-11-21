import { useAuth0 } from '@auth0/auth0-react'

type CommentFormProps = {
  text: string
  setText: Function
  onSubmit: (e: React.FormEvent) => Promise<void>
}

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <form className='w-full h-full flex flex-col pb-10' onSubmit={onSubmit}>
      <textarea
        className="flex w-full flex-grow p-3  resize-y text-neutral-500 outline-none border-[1px] placeholder-neutral-300"
        rows={2}
        placeholder={
          isAuthenticated
            ? `发表你的评论,支持Markdown格式捏`
            : '请先登录再和Lyra交流捏'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="py-1 px-4 bg-red-500 text-white disabled:opacity-40 hover:scale-105">
              发送
            </button>
            <button className=" text-neutral-500 bg-neutral-100 py-1 px-4" onClick={() => logout()}>
              登出
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-4  bg-red-500 text-white disabled:opacity-40 hover:scale-105 transition duration-150"
            onClick={() => loginWithPopup()}
          >
           登录
          </button>
        )}
      </div>
    </form>
  )
}

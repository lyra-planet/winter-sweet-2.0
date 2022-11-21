import type { Comment } from '../../../interfaces'
import Item from './item'
import { useAuth0 } from '@auth0/auth0-react'

type CommentListProps = {
  comments?: Comment[]
  onDelete: (comment: Comment) => Promise<void>
}
export default function CommentList({ comments, onDelete }: CommentListProps) {
  const { user } = useAuth0()
  const listComments = (comments) => {
    const arr = {
      1: [], 2: []
    }
    const final = []
    comments.forEach((element, index) => {
      if ((index) % 2 === 0) {
        arr[1].push(element)
      } else {
        arr[2].push(element)
      }
    });

    arr[1].forEach((element, index) => {
      if (index > arr[2].length - 1) {
        final.push([{
          element: element,
          w: 1
        }])
      } else {
        console.log(element)
        const len1 = element.originText.length
        const len2 = arr[2][index].originText.length
        final.push([
          {
            element,
            w: len1 / (len1 + len2)
          }, {
            element: arr[2][index],
            w: len2 / (len1 + len2)
          }
        ])
      }
    })
    console.log(final)
    return final
  }
  return (
    <div className="
     flex flex-col w-full
     max-h-full overflow-auto scrollbar-none">
      <section className='hidden md:block'>
      {comments &&
        listComments(comments).map((el, index) => (
          <div key={index} className='flex flex-row w-full
          first:border-t
          py-3
          border-b'>
          {
              el.map((item, index) => {
                const comment = item.element
                const isAuthor = user && user.sub === comment.userSub
                const isAdmin =
                  user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
                return (
                  <Item key={comment.id}
                    w={item.w}

                    onDelete={onDelete}
                    comment={comment} isAdmin={isAdmin} isAuthor={isAuthor} />
                )
              })
            }
          </div>
        ))
      }
      </section>

      <section className='block md:hidden'>
      { comments &&
        comments.map((comment, index) => {
          const isAuthor = user && user.sub === comment.userSub
          const isAdmin =
            user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
          return (
            <Item key={comment.id}
              w={1}
              onDelete={onDelete}
              comment={comment} isAdmin={isAdmin} isAuthor={isAuthor} />
          )
        })
      }
      </section>



    </div>
  )
}

import type { Comment } from '../../interfaces'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useAuth0 } from '@auth0/auth0-react'

async function fetcher(url: string) {

  const query = new URLSearchParams({ url })
  const queryUrl = url
  return fetch(queryUrl).then((res) => res.json())
}

export default function useComments(postId,linkTo) {
  const { getAccessTokenSilently } = useAuth0()
  const [text, setText] = useState('')
  const [url, setUrl] = useState<string | null>(null)
  const { data: comments, mutate } = useSWR<Comment[] | boolean>(
    `/api/comment/?postId=${postId}&linkTo=${linkTo}`,
    fetcher,
    { fallbackData: false,suspense:false }
  )
  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    setUrl(url)
  }, [])
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    try {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ replyToId:postId, text,linkTo }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      setText('')
      await mutate()
    } catch (err) {
      console.log(err)
    }
  }
  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently()
    try {
      await fetch('/api/comment', {
        method: 'DELETE',
        body: JSON.stringify({ url, comment }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      await mutate()
    } catch (err) {
      console.log(err)
    }
  }
  return { text, setText, comments, onSubmit, onDelete }
}

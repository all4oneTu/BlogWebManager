import { useRouter } from 'next/router'
import React from 'react'

function PostPage() {
    const router = useRouter()
    console.log(router.query())
  return (
    <div>
          hello
    </div>
  )
}

export default PostPage
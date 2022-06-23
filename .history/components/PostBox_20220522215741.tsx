import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data : session} = useSession()
  return (
    <form>
        <div>
        </div>      
    </form>
  )
}

export default PostBox
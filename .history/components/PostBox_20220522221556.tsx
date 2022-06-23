import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data : session} = useSession()
  return (
    <form>
      <div className="flex items-center space-x-3">
              
              <input
                  disabled={!session}
                  className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
                  type="text" placeholder={session?'create a Post': 'Sign to post'} />
        </div>      
    </form>
  )
}

export default PostBox
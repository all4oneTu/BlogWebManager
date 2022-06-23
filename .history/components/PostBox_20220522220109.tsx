import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data : session} = useSession()
  return (
    <form>
          <div>
              <input
                  disabled={!session}
                  className="bg-gray-500 p-2"
                  type="text" placeholder="create a Post" />
        </div>      
    </form>
  )
}

export default PostBox
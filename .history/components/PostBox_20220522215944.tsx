import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data : session} = useSession()
  return (
    <form>
          <div>
              <input
                  disabled={!se}
                  type="text" placeholder="create a Post" />
        </div>      
    </form>
  )
}

export default PostBox
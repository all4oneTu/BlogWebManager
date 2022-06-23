import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data : session} = useSession()
  return (
    <form>
          <div>
              <input
                  disabled={!session}
                  className="bg-gray-50 p-2 pl-5 outline-none"
                  type="text" placeholder={} />
        </div>      
    </form>
  )
}

export default PostBox
import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../../components/Avatar'

function Subreddit() {
    const { query: {topic}} = useRouter()
  return (
      <div className={`h-24 bg-red-400 p-8`}>
          <div className="mx-8 mt-10 bg-white">
              <div>
                  <Avatar seed={topic as string} large/>
              </div>
              <div>
                  <h1>Welcome to the r/{topic} subreddit</h1>
                  <p>r/{topic}</p>
              </div>
          </div>
    </div>
  )
}

export default Subreddit
import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../../components/Avatar'

function Subreddit() {
    const { query: {topic}} = useRouter()
  return (
      <div className=''>
          <div>
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
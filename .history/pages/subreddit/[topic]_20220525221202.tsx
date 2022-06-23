import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../../components/Avatar'

function Subreddit() {
    const { query: {topic}} = useRouter()
  return (
      <div>
          <div>
              <div>
                  <Avatar seed={topic && string} large/>
              </div>
          </div>
    </div>
  )
}

export default Subreddit
import { useRouter } from 'next/router'
import React from 'react'

function Subreddit() {
    const {query:{topic}} = useRouter()
  return (
    <div>Subreddit</div>
  )
}

export default Subreddit
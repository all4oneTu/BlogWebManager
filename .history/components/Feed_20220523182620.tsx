import { useQuery } from '@apollo/client'
import React from 'react'

function Feed() {
    const {data, error} = useQuery(GET_ALL)
  return (
    <div>Feed</div>
  )
}

export default Feed
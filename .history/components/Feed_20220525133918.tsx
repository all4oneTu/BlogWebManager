import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import Post from './Post'

function Feed() {
    const { data, error } = useQuery(GET_ALL_POSTS)
    const posts: Post[] = data?.getPostList
    console.log(posts)
  return (
    <div>
      {posts?.map((post) => (
         <Post post={post} key={pos}  />
      )
      )}
    </div>
  )
}

export default Feed
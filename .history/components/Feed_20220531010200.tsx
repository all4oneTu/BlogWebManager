import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import Post from './Post'

type P

function Feed({topic} : Props) {
    const { data, error } = useQuery(GET_ALL_POSTS)
    const posts: Post[] = data?.getPostList
    console.log(posts)
  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post,index) => (
         <Post post={post} key={post.id}  />
      )
      )}
    </div>
  )
}

export default Feed
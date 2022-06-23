import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { GET_POST_BY_ID } from '../../graphql/queries'

function PostPage() {
    const router = useRouter()
  const { } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id : 
    })
  return (
    <div>
          hello
    </div>
  )
}

export default PostPage
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { GET_POST_BY_ID } from '../../graphql/queries'

function PostPage() {
  const router = useRouter()
  const {data} = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId ,
    },
  })
  const  post: Post = data?.get
  return <div>hello</div>
}

export default PostPage

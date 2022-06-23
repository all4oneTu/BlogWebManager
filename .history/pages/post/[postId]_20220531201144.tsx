import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../components/Post'
import { GET_POST_BY_ID } from '../../graphql/queries'

function PostPage() {
  const router = useRouter()
  const { data } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId,
    },
  })
  const { data: session } = useSession()
  const post: Post = data?.getPostById
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div>
        <p>Comment as <span>{}</span></p>
      </div>
    </div>
  )
}

export default PostPage

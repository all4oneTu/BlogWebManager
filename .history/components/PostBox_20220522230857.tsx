import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import Avatar from './Avatar'

type FormData = {
  postTitle: string 
  postBody: string 
  postImage: string 
  subreddit : string 
}

function PostBox() {
  const { data: session } = useSession()
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState:{errors}
  } = useForm<FormData>()
  return (
    <form className="sticky top-16 z-50 rounded-md border-gray-500 bg-white p-2">
      <div className="flex items-center space-x-3">
        <Avatar  />
        <input
            {...register('postTitle', {required : true})}
            disabled={!session}
            className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type="text" placeholder={session ? 'create a Post' : 'Sign to post'} />
        <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`} />
        <LinkIcon className="h-6 text-gray-300"/>
      </div>    
      {!!watch('postTitle') && (
        <div>
          <p>Body</p>
          <input className=""m-2 flex />
        </div>)}
    </form>
  )
}

export default PostBox
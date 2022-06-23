import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
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
  const [imageBoxOpen, setImageBoxOpen] = useState(false)
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
        <PhotographIcon
          onClick={()=>setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${imageBoxOpen && 'text-blue-300'}`} />
        <LinkIcon className="h-6 text-gray-300"/>
      </div>    
      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body</p>
            <input
              {...register('postBody')}
              className="m-2 flex bg-blue-50 outline-none p-2"
              type="text" placeholder="Text (optional)" />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit</p>
            <input
              {...register('subreddit')}
              className="m-2 flex bg-blue-50 outline-none p-2"
              type="text" placeholder="i.e. reactjs" />
          </div>
        </div>
      )}
    </form>
  )
}

export default PostBox
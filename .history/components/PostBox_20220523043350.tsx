import { useMutation, useQuery } from '@apollo/client'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ADD_POST, ADD_SUBREDDIT } from '../graphql/mutations'
import Avatar from './Avatar'
import client from '../apollo-client'
import { GET_SUBREDDIT_BY_TOPIC } from '../graphql/queries'
import toast from 'react-hot-toast'
type FormData = {
  postTitle: string 
  postBody: string 
  postImage: string 
  subreddit : string 
}

function PostBox() {
  const { data: session } = useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState(false)
  const [addPost] = useMutation(ADD_POST)
  const [addSubreddit] = useMutation(ADD_SUBREDDIT)
  const subreddit = useQuery(GET_SUBREDDIT_BY_TOPIC)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState:{errors}
  } = useForm<FormData>()
  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData)
    const notification = toast.loading('Creating a new Post ....')
    try {
      const {data : {getSubredditListByTopic}} =  await client.query({
          query: GET_SUBREDDIT_BY_TOPIC,
          variables: {
            topic : formData.subreddit
          }
      })
      const subredditExist = getSubredditListByTopic.length > 0
      console.log(getSubredditListByTopic)
      if (!subredditExist) {
        //Create new subreddit
        console.log('Subreddit is new -> create a subreddit')
        const {data : {insertSubreddit : newSubreddit}} = await addSubreddit({
          variables: {
            topic : formData.subreddit
          }
        })
        console.log("create post ...", formData)
        const image = formData.postImage || ''
        const { data: { insertPost: newPost } } = await addPost({
          variables: {
            body: formData.postBody,
            title: formData.postTitle,
            image: image,
            subreddit_id: newSubreddit.id,
            username : session?.user?.name
          }
        })
        console.log("New post add ...", newPost)
      }
      else {
        //Using existing subreddit
        console.log("Using existing subreddit!!")
        console.log(getSubredditListByTopic)
        const image = formData.postImage || ''
        const { data: { insertPost: newPost } } = await addPost({
          variables: {
            body: formData.postBody,
            title: formData.postTitle,
            image: image,
            subreddit_id: getSubredditListByTopic[0].id,
            username : session?.user?.name
          }
        })
        console.log("New post add ...", newPost)
      }
      //After the post has been added : 
      setValue('postBody', '')
      setValue('postTitle', '')
      setValue('postImage', '')
      setValue('subreddit', '')
      toast.success('New Post Created', {
        id: notification
      })
    } catch (error) {
      toast.error('Whoops something went wrong !', {
        id : notification
      })
      console.log( error)
    }
  })
  return (
    <form onSubmit={onSubmit} className="sticky top-16 z-50 rounded-md border-gray-500 bg-white p-2">
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
              className="m-2 flex-1 bg-blue-50 outline-none p-2"
              type="text" placeholder="Text (optional)" />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit</p>
            <input
              {...register('subreddit', {required: true})}
              className="m-2 flex-1 bg-blue-50 outline-none p-2"
              type="text" placeholder="i.e. reactjs" />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
            <p className="min-w-[90px]">Image Url</p>
            <input
              {...register('postImage')}
              className="m-2 flex-1 bg-blue-50 outline-none p-2"
              type="text" placeholder="i.e. reactjs" />
          </div>
          )}
          {/*Error*/}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type == 'required' && (
                <p>A post title is required</p>
              )}
               {errors.subreddit?.type == 'required' && (
                <p>A subreddit is required</p>
              )}
            </div>
          )}

          {!!watch('postTitle') && (
            <button type="submit" className="w-full rounded-full bg-blue-500 p-2 text-white">
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  )
}

export default PostBox
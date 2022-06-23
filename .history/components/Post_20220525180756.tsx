import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon
} from '@heroicons/react/outline'
import React from 'react'
import Avatar from './Avatar'

type Props = {
    post: Post
}

function Post({post}: Props) {
  return (
    <div className="flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600 rounded-md">
      {/* Vote */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className='voteButton hover:text-red-400'/>
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className='voteButton hover:text-blue-400'/>
      </div>
      <div>
        {/* Header */}
        <div className="p-3 pb-1">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p>
            
          </p>
        </div>
        {/* Body */}
        {/* Image */}
        {/* Footer */}
      </div>
    </div>
  )
}

export default Post
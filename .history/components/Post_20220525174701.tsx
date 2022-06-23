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

type Props = {
    post: Post
}

function Post({post}: Props) {
  return (
    <div>
      {/* Vote */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p">
        <ArrowUpIcon className='voteButton hover:text-red-400'/>
        <p>0</p>
        <ArrowDownIcon className='voteButton hover:text-blue-400'/>
      </div>
      <div>
        {/* Header */}
        {/* Body */}
        {/* Image */}
        {/* Footer */}
      </div>
    </div>
  )
}

export default Post
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
      <div>
        <ArrowUpIcon className='voteButton'/>
        <p>0</p>
        <ArrowDownIcon className='voteButton'/>
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
import Image from 'next/image'
import React from 'react'

function Avatar() {
    const {data : session } =use
  return (
      <div>
          <Image src={`https://avatars.dicebear.com/api/human/${}` } />
    </div>
  )
}

export default Avatar
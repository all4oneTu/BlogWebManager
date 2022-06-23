import Image from 'next/image'
import React from 'react'

function Avatar() {
  return (
      <div>
          <Image src={`https://avatars.dicebear.com/api/:sprites/:seed.svg` } />
    </div>
  )
}

export default Avatar
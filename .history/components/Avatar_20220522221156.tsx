import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Avatar() {
    const {data : session } =useSession()
  return (
      <div>
          <Image src={`https://avatars.dicebear.com/api/human/${session?.}` } />
    </div>
  )
}

export default Avatar
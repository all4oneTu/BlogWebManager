import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

type Props = {
    seed?: string
    large?:string
}
function Avatar({seed, large} : Props) {
    const {data : session } =useSession()
  return (
      <div className=>
          <Image
              layout='fill'
              src={`https://avatars.dicebear.com/api/open-peeps/
                ${seed || session?.user?.name || 'placeholder'}.svg`} />
    </div>
  )
}

export default Avatar
import Image from 'next/image'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import user from '../../../public/assets/user.jpeg'

function ProfileCard({ username }) {
  return (
    <div className="flex h-[60px] w-[350px] items-center justify-between rounded-full bg-white p-2 shadow-md">
      <div className="flex h-full w-auto gap-x-2">
        <div className="h-10 w-12 rounded-full">
          <Image width={40} height={40} src={user} />
        </div>
        <div className="flex h-10 w-full flex-col justify-center">
          <div className="font-semibold">Halo, {username}</div>
          <div>Semoga harimu menyenangkan</div>
        </div>
      </div>
      <button className="grid h-10 w-10 cursor-pointer place-items-center">
        <FaPencilAlt />
      </button>
    </div>
  )
}

export default ProfileCard

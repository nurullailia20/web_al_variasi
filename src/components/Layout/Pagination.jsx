import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pagination() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-between gap-x-2">
        <button className="grid h-10 w-10 place-items-center rounded-full">
          <IoIosArrowBack className="h-7 w-7 font-bold text-white" />
        </button>
        <ul className="flex gap-x-2">
          {[...new Array(5)].map((_, index) => (
            <button className="grid h-10 w-10 place-items-center rounded-full bg-white">{index + 1}</button>
          ))}
        </ul>
        <button className="grid h-10 w-10 place-items-center rounded-full ">
          <IoIosArrowForward className="h-7 w-7 font-bold text-white" />
        </button>
      </div>
    </div>
  )
}

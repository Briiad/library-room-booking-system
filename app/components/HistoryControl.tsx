'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface HistoryControlProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const HistoryControl: FC<HistoryControlProps> = ({hasNextPage, hasPrevPage}) =>{
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const perPage = searchParams.get('perPage') ?? '5'
  return (
    <div className='flex items-center justify-center gap-2 p-6'>
      <button className='bg-blue-500 text-white p-2' disabled={!hasPrevPage} onClick={() => {
        router.push(`/admin/history/?page=${Number(page) - 1}&perPage=${perPage}`)
      }}>
        Prev Page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(perPage))}
      </div>

      <button className='bg-blue-500 text-white p-2' disabled={!hasNextPage} onClick={() => {
        router.push(`/admin/history/?page=${Number(page) + 1}&perPage=${perPage}`)
      }}>
        Next Page
      </button>
    </div>
  )
}

export default HistoryControl
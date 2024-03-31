'use client'

import React, { FC } from 'react'
import { CSVLink } from "react-csv";

interface CsvConvertProps {
  // data is an array of objects
  data: any[]
}

const CsvConvert: FC<CsvConvertProps> = ({data}) => {

  const csvData = [
    ["Id", "Name", "NIM", "Email", "Room", "Status", "Start Session", "Date", "createdAt",],
    ...data.map(({id, user_name, user_nim, user_mail, room_name, status, startSession, startDate, createdAt}) => [
      id, user_name, user_nim, user_mail, room_name, status, startSession, startDate, createdAt
    ])
  ]

  return (
    <>
      <CSVLink href='' data={csvData} filename={"history.csv"} className="bg-green-500 text-white p-4">
        Download 1 Month History Data
      </CSVLink>
    </>
  )
}

export default CsvConvert
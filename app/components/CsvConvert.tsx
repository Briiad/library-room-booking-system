'use client'

import React, { FC } from 'react'
import { CSVLink } from "react-csv";

interface CsvConvertProps {
  // data is an array of objects
  data: any[]
}

const CsvConvert: FC<CsvConvertProps> = ({data}) => {

  const csvData = [
    ["createdAt", "Id", "Name", "NIM", "Email", "Room", "status", "Start Session", "Date",],
    ...data.map(({createdAt, id, user_name, user_nim, user_mail, room_name, status, startSession, startDate}) => [
      createdAt, id, user_name, user_nim, user_mail, room_name, status, startSession, startDate
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
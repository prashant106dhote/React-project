import React from 'react'
import { useParams } from 'react-router-dom'

const CoursDetailPage = () => {
   const param =  useParams()
  return (
    <div>
      <h1>{param.id}CoursesDetailPage</h1>
    </div>
  )
}

export default CoursDetailPage

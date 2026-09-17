import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    let params = useParams()
    console.log(params.id)

  return (
    <div className="flex flex-col justify-center items-center pt-30">
        <div className="bg-zinc-900 w-1/2 h-96 py-40 flex flex-col justify-center items-center rounded-md border border-gray-600">
            <h1 className="text-3xl  text-white font-bold  mb-5 capitalize"> {params.id} details are here</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus odio repellendus laborum voluptas consequatur accusantium deleniti, dolorem fugiat eum quae asperiores doloremque cum, adipisci culpa, quo eveniet repudiandae vitae nulla veritatis libero. Excepturi ullam officia non quidem debitis, dolore veritatis beatae, magni molestias labore assumenda numquam. Impedit, magni autem.</p>
        </div>
      
    </div>
  )
}

export default CourseDetail

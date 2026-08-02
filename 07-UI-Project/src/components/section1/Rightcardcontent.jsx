import React from 'react'

const Rightcardcontent = (elem) => {
  return (
    <div className="absolute top-0 left-0 h-full p-8 justify-between flex flex-col w-full">
            <h2 className='bg-white text-2xl font-semibold h-12 w-12 rounded-full items-center justify-center flex'>{elem.id + 1}</h2>
            <div className="">
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed aut esse obcaecati laboriosam? Saepe.</p>
                <div className="flex justify-between">
                    <button style={{backgroundColor:elem.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{elem.tag}</button>
                    <button style={{backgroundColor:elem.color}} className=' text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
            </div>
  )
}

export default Rightcardcontent

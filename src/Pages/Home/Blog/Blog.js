import React from 'react'
import { TypeAnimation } from 'react-type-animation';
 
export const Blog = () => {
  return (
    <div>
        <TypeAnimation
        className='text-4xl h-64 lg:h-96 flex items-center justify-center pl-2'
                sequence={[
                  "Coming Soon", // Types 'One'
                  2000, // Waits 1s
                  "Coming Soon new blogs", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "Coming Soon new blogs about mern stack development !",
                  2000, // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "3em" }}
              />


    </div>
  )
}

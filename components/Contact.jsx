//rafce
import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
        <h1 className="text-2xl font-bold text-center p4">Let&apos;s work together</h1>
        <form className="max-w-[600px] m-auto">
            <div className="grid grid-cols-2 gap-2">
                <input className="p-1 border shadow-lg" type="text" placeholder="Name" />
                <input className="p-1 border shadow-lg" type="email" placeholder="Email" />
            </div>
            <input className="w-full p-1 mt-4 border shadow-lg border-grayto-sky-800" type="text" placeholder="Subject" />
            <textarea className="w-full p-1 mt-4 border shadow-lg" placeholder="Message" />
            <button className="block w-full p-1 mt-4 text-white bg-gray-900 shadow-lg ">Send</button>
        </form>
    </div>
  )
}

export default Contact
import React from 'react'
import Navbar from '@/components/ui/Navbar'
import FeedbackForm from '@/components/feedback-form'
const page = () => {
  return (
    <div className="star-background bg-black min-h-screen flex flex-col relative text-white">
      <Navbar />
      <div className="flex w-full justify-center pr-14">
        <FeedbackForm />
      </div>
    </div>
  )
}

export default page

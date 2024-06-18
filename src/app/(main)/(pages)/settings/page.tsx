import ProfileForm from '@/components/forms/profile-form'
import React from 'react'
import ProfilePicture from './components/profile-picture'
import { db } from '@/lib/db'
// import { currentUser } from '@clerk/nextjs'
type Props = {}

const Settings = (props: Props) => {

  // const removeProfileImage = async () => {
  //   'use server'
  //   const response = await db.user.update({
  //     where: {
  //       clerkId: authUser.id,
  //     },
  //     data: {
  //       profileImage: '',
  //     },
  //   })
  //   return response
  // }
  
  // const uploadProfileImage = async (image: string) => {
  //   'use server'
  //   const id = authUser.id
  //   const response = await db.user.update({
  //     where: {
  //       clerkId: id,
  //     },
  //     data: {
  //       profileImage: image,
  //     },
  //   })

  //   return response
  // }

  // const updateUserInfo = async (name: string) => {
  //   'use server'

  //   const updateUser = await db.user.update({
  //     where: {
  //       clerkId: authUser.id,
  //     },
  //     data: {
  //       name,
  //     },
  //   })
  //   return updateUser
  // }

  return (
    <div className='flex flex-col gap-4'>
        <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-[4xl] backdrop-blue-lg'>
            <span>
                Settings
            </span>
        </h1>
        <div className='flex flex-col gap-10 p-6'>
          <h2 className='text-2xl font-bold'>User Profile</h2>  
          <p className='text-base text-white/50'>Add or update your information</p>
          {/* <ProfilePicture
            onDelete={removeProfileImage}
              userImage={user?.profileImage} || ''}
              onUpload={uploadProfileImage}
            >
          </ProfilePicture> */}
          <ProfileForm/>
        </div>
    </div>
  )
}

export default Settings
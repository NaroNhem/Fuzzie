'use client'
import { ZIndex } from '@tsparticles/engine'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {}

const ProfileForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode:'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "Naro",
            email: "naro.email@fuzzie.com",
        }
    })
  return (
    <Form {...form}>
        <form className='flex flex-col gap-6' onSubmit={()=> {}}>
            <FormField
            disabled={isLoading}
            control={form.control}
            name="name"
            render={({field}) => (
                <FormItem>
                    <FormLabel className='text-lg'>User Full Name</FormLabel>
                    <FormControl>
                        <Input
                            placeholder="Name"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>
        </form>
        <form className='flex flex-col gap-6' onSubmit={()=> {}}>
            <FormField
            disabled={true}
            control={form.control}
            name="email"
            render={({field}) => (
                <FormItem>
                    <FormLabel className='text-lg'>Email</FormLabel>
                    <FormControl>
                        <Input
                            placeholder="email"
                            type='email'
                            {...field}
                            disabled
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>
            <Button
            type='submit'
            className='self-start bg-slate-600 rounded-lg text-white hover:bg-[#bd8aff] hover:text-whitek hover:border-[1px] dark:bg-white dark:hover:bg-[#2F006B] dark:text-black dark:hover:text-white  dark:hover:border-[1px]'>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        Saving
                    </>
                ) : (
                    'Save User Settings'
                )}
            </Button>
        </form>
    </Form>
  )
}

export default ProfileForm
import React from 'react'
import { IconHome2, IconBrandGoogleAnalytics, IconDiscount2, IconUser, IconTag, IconShoppingBag, IconPhoto, IconSettings, IconInfoCircle } from "@tabler/icons-react"

export const Sidebar
    = () => {
        return (
            <div className='w-60 bg-stone-100 h-screen overflow-hidden fixed left-0 flex justify-center'>

                <div className='w-10/12 h-screen relative'>

                    <div className='h-1/2 pt-3'>

                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconHome2 />
                            <p className='font-semibold text-md'>Home</p>
                        </div>
                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconShoppingBag />
                            <p className='font-semibold text-md'>Orders</p>
                        </div>

                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconTag />
                            <p className='font-semibold text-md'>Products</p>
                        </div>

                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconUser />
                            <p className='font-semibold text-md'>Customers</p>
                        </div>

                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconPhoto />
                            <p className='font-semibold text-md'>Contents</p>
                        </div>

                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconBrandGoogleAnalytics />
                            <p className='font-semibold text-md'>Analytics</p>
                        </div>
                        <div className='w-full h-10 flex gap-1 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconDiscount2 />
                            <p className='font-semibold text-md'>Discounts</p>
                        </div>

                    </div>


                    <div className='fixed bottom-2  w-52'>

                        <div className='w-full h-10 flex gap-1 mb-4 rounded-lg items-center cursor-pointer hover:bg-white'>
                            <IconSettings />
                            <p className='font-semibold text-md'>Settings</p>
                        </div>

                        <div className='w-full h-10 flex gap-1 rounded-md items-center cursor-pointer bg-green-100'>
                            <IconInfoCircle />
                            <p className='font-semibold text-md'>Non-transferable</p>
                        </div>

                    </div>


                </div>
            </div>
        )
    }

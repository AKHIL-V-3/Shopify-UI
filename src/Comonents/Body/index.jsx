import { IconPinned, IconDots } from "@tabler/icons-react"
import TableData from '../DataTable/index'

export const Body = () => {
    return (
        <>
            <div className='w-full  h-full flex justify-end'>

                <div className='w-10/12 mt-2 me-2 h-full flex flex-col justify-center items-start ps-5'>

                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div style={{ fontSize: "8px" }} className='w-6 h-5 rounded-md bg-black flex justify-center items-center text-xs font-normal text-white'>
                                PIXI
                            </div>
                            <h1 className='text-md font-semibold'>Pixi- Staging</h1>
                        </div>

                        <div className='flex me-5'>
                            <IconPinned />
                            <IconDots />
                        </div>
                    </div>

                    <h1 className='mt-8 text-xl font-bold mb-4'>Orders</h1>

                    <div className='w-11/12 h-full  object-contain scroll-auto rounded-md'>

                        <TableData />

                    </div>

                </div>
            </div>
        </>
    )
}

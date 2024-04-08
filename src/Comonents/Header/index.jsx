import {  IconBell, IconNotification, IconNotificationOff, IconSearch,  } from "@tabler/icons-react"

export const Header = () => {
  return (
    <>
       <div className="bg-black flex h-14 w-full">

        <div className="w-3/12 h-full flex  items-center">
            <img className="w-32 h-8 ml-5" src="https://images.squarespace-cdn.com/content/v1/64de8238d8037b6fb85ff258/70c46614-4bef-43b9-af2e-183bffda891b/Shopify-Logo+white+transparent_.png" alt="" />
        </div>

         <div className="w-1/2 h-full flex justify-center items-center">

               <div className="bg-zinc-800 text-opacity-70 text-white border border-white  border-opacity-20 rounded-lg px-2 w-7/12 h-11/12 flex justify-center items-center">
                    <IconSearch/>
                   <input className="w-10/12 bg-zinc-800  p-2 outline-none border-none text-start" placeholder="Search" type="text" />
                   <p>Ctrl K</p>
               </div>

         </div>

         <div className="w-3/12 h-full flex items-center justify-end me-5 gap-5">
          
              <div className="bg-zinc-800 text-white text-opacity-70 h-8 w-8 p-1 flex justify-center items-center rounded-lg">
                 <IconBell/>
              </div>

              <div className="bg-zinc-800 text-white w text-opacity-70  ps-2 h-8 rounded-lg flex gap-4 items-center">
                  <p>storetools-beta</p>
                    <div className="bg-green-400 rounded-lg w-10 h-full flex items-center justify-center text-black">
                         <p>sto</p>
                    </div>
              </div>
             
               
         </div>

          

       </div>
    </>
  )
}

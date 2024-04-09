import { useEffect, useState } from "react";
import { Body } from "../../Components/Body"
import { Header } from "../../Components/Header"
import { Sidebar } from "../../Components/Sidebar"

const Home = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);



  return (
    <>
      
      <Header/>
       <div className="w-full h-screen fixed flex justify-between">
       <Sidebar/>
       <Body/>
       </div>
    </>
  )
}

export default Home
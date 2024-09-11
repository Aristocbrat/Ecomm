import React,{useState,useEffect} from 'react'

const Advert = () => {
    const myAD = ["Shop here to get the best product at the right price",
        "Show the world your products" ,
         "Advertize here to reach bigger audiences",
          "We have over 15,000+ Visitors a day " ,
           " Let them see your products "]
           const [currentAD, setCurrentAD] = useState(0);
           const nextAD= () =>{
             setCurrentAD((prevId)=> (prevId + 1) % myAD.length)
           }
           const prevAD= () =>{
            setCurrentAD((prevId)=> (prevId - 1 + myAD.length )% myAD.length)
          }
          useEffect(() => {
            const interval = setInterval(nextAD, 9000);
            return () => clearInterval(interval);
        }, [currentAD]);
  return (
    <div>
       <div className="caro bg-[#1f4550] w-[94%] h-[150px] mx-auto rounded-l-full mt-5 flex">
           <div  className="text-white px-5 py-9 text-5xl mx-auto">
           <span></span>{myAD[currentAD]} 
           
           </div>
           
           </div>
       
    </div>
  )
}

export default Advert

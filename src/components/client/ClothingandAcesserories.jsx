import React,{useState,useEffect} from 'react'
import { GiTie } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import Pagination from './../paginations/Pagination'
import Clotandass from './../itemcardss/Clotandass'
import productdata7 from './../datasfolder/Data7'


const ClothingandAcesserories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const [currentPosts, setCurrentPosts] = useState([]);
  
    useEffect(() => {
      const indexofLastpost = currentPage * postsPerPage;
      const indexofFirstpost = indexofLastpost - postsPerPage;
      const posts = productdata7.slice(indexofFirstpost, indexofLastpost);
      setCurrentPosts(posts);
    }, [currentPage, postsPerPage]);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  return (
    <div>
      
      <div className="headss font-extrabold sticky top-0 z-30 w-full bg-white  dark:bg-black dark:text-white ">
        <h1 className='flex xl:text-4xl sm:text-xl justify-center py-5 gap-3'><GiTie /> Clothing & Acessorories <GiAmpleDress /></h1>
      </div>
      <div className="flex justify-center flex-wrap gap-12 mt-4   dark:bg-black dark:text-white font-bold">
        {currentPosts.map((item, index) => (
          <Clotandass
            key={index}
            title={item.title}
            price={item.price}
            item={item}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <Pagination postPerPage={postsPerPage} totalPosts={productdata7.length} paginate={paginate}/>
      
    </div>
  )
}

export default ClothingandAcesserories

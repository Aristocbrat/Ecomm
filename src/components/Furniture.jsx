import React,{useEffect,useState} from 'react'
import Pagination from './paginations/Pagination';
import productdata10 from './datasfolder/Data10';
import Navbar from './Navbar';
import Footer from './Footer';
import { MdChair } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import Furnint from './itemcardss/Furnint';

const Furniture = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [currentPosts, setCurrentPosts] = useState([]);
    useEffect(() => {
        const indexofLastpost = currentPage * postsPerPage;
        const indexofFirstpost = indexofLastpost - postsPerPage;
        const posts = productdata10.slice(indexofFirstpost, indexofLastpost);
        setCurrentPosts(posts);
      }, [currentPage, postsPerPage]);

      const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  return (
    <div>
        <Navbar/>
        <div className="headss sticky top-0 z-20 bg-white  dark:bg-black dark:text-white w-full">
        <h1 className='font-extrabold text-4xl flex justify-center py-5 gap-3 '>
        <MdChair />
         Furnitures & Interior
         <MdTableBar /> 
        </h1>
      </div>
        <div className="flex justify-center flex-wrap gap-12 mt-4 bg-[#]  dark:bg-black dark:text-white font-bold">
        {currentPosts.map((item, index) => (
          <Furnint
            key={index}
            title={item.title}
            price={item.price}
            item={item}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <Pagination postPerPage={postsPerPage} totalPosts={productdata10.length} paginate={paginate} />
        <Footer/>
      
    </div>
  )
}

export default Furniture

import React ,{useState,useEffect}from 'react'
import Pagination from './paginations/Pagination';
import productdata9 from './datasfolder/Data9';
import Navbar from './Navbar';
import Footer from './Footer';
import Sportsout from './itemcardss/Sportsout'
import { CgGym } from "react-icons/cg";
import { FaPersonRunning } from "react-icons/fa6";
import Nav from './Nav';
import Nav2 from './Nav2';

const Sporty = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [currentPosts, setCurrentPosts] = useState([]);
    useEffect(() => {
        const indexofLastpost = currentPage * postsPerPage;
        const indexofFirstpost = indexofLastpost - postsPerPage;
        const posts = productdata9.slice(indexofFirstpost, indexofLastpost);
        setCurrentPosts(posts);
      }, [currentPage, postsPerPage]);

      const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  return (
    <div>
        <Nav/>
        <Nav2/>
        <div className="headss sticky top-0 z-20 bg-white  dark:bg-black dark:text-white w-full">
        <h1 className='font-extrabold xl:text-4xl sm:text-xl flex justify-center py-5 gap-3 '>
        <CgGym />
         Sports,Fitness & Outdoors
         <FaPersonRunning />
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-12 mt-4 bg-[#1f4550] font-bold">
        {currentPosts.map((item, index) => (
          <Sportsout
            key={index}
            title={item.title}
            price={item.price}
            item={item}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <Pagination postPerPage={postsPerPage} totalPosts={productdata9.length} paginate={paginate} />
        <Footer/>
      
    </div>
  )
}

export default Sporty

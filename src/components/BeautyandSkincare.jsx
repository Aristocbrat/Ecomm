
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './paginations/Pagination';
import { GiLips, GiLipstick } from "react-icons/gi";
import productdata6 from './datasfolder/Data6';
import Btsk from './itemcardss/Btsk';

const BeautyandSkincare = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const indexofLastpost = currentPage * postsPerPage;
    const indexofFirstpost = indexofLastpost - postsPerPage;
    const posts = productdata6.slice(indexofFirstpost, indexofLastpost);
    setCurrentPosts(posts);
  }, [currentPage, postsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber); 

  return (
    <div>
      <Navbar />
      <div className="headss sticky top-0 z-20 bg-white  dark:bg-black dark:text-white w-full">
        <h1 className='font-extrabold xl:text-4xl sm:text-xl flex justify-center py-5 gap-3 '>
          <GiLipstick className='text-red-600 mt-1 ' />
          Beauty and SkinCare
          <GiLips className='text-red-600 mt-1' />
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-12 mt-4 bg-[#FFDFD6]  dark:bg-black dark:text-white font-bold">
        {currentPosts.map((item, index) => (
          <Btsk
            key={index}
            title={item.title}
            price={item.price}
            item={item}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
      <Pagination postPerPage={postsPerPage} totalPosts={productdata6.length} paginate={paginate} />
      <Footer />
    </div>
  );
}

export default BeautyandSkincare;



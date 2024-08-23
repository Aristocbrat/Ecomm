import React,{useState,useEffect} from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import img1 from './../../assets/images/sshoe2.jpg'
import img2 from './../../assets/images/back.jpg'
import img3 from './../../assets/images/int12.jpg'
import img4 from './../../assets/images/jean.jpg'
import img5 from './../../assets/images/back4.jpg'
import img6 from './../../assets/images/pf.jpg'
const Carousel = () => {
    const myCaro = [img1,img2,img3,img4,img5,img6]
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () =>{
        const isLastSlide = currentIndex === myCaro.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const prevImage = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? myCaro.length - 1 : currentIndex - 1 
        setCurrentIndex(newIndex)
    }
    useEffect(() => {
        const interval = setInterval(nextImage, 9000);
        return () => clearInterval(interval);
    }, [currentIndex]);
  return (
    <div>
         <div className='max-w-[100%] min-w-36 relative  mx-auto h-[450px] min-h-36  group pb-9'>
        <div style={{backgroundImage:`url(${myCaro[currentIndex]})`}} 
        className='w-full h-full rounded-[2px] bg-center bg-cover duration-500 [clip-path:ellipse(640px_430px_at_22%_30%)] '></div>
      <div className='directions'>
        <div className="leftarrow">
           <BsChevronCompactLeft onClick={prevImage}   className='hidden group-hover:block absolute top-[50%] left-0 -translate-y-1/2 rounded-full  text-black bg-slate-500 cursor-pointer text-5xl '/>
        </div>
        <div className="rightarrow">
            <BsChevronCompactRight onClick={nextImage} className='hidden group-hover:block absolute top-[50%] xl:right-[35%] sm:right-0 -translate-y-1/2  rounded-full  text-black bg-slate-500 cursor-pointer text-5xl'/>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Carousel

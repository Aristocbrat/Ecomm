import React,{useState,useEffect} from 'react';
import productdata11 from '../datasfolder/Data11';
import Summarycard from '../itemcardss/Summarycard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Summary = () => {
    const [sliderSettings, setSliderSettings]  =useState( {
      swipeToSlide: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
     
    });
    useEffect(() => {
      const mobileResize = () => {
        if (window.innerWidth <= 768) {
          setSliderSettings((prevSettings) => ({
            ...prevSettings,
            swipeToSlide: true,
            slidesToShow: 2, // Adjust number of slides for mobile
          }));
        } else {
          setSliderSettings((prevSettings) => ({
            ...prevSettings,
            swipeToSlide: false,
            slidesToShow: 3, // Number of slides for larger screens
          }));
        }
      };
  
      // Call the function once when component mounts
      mobileResize();
  
      // Add resize event listener
      window.addEventListener('resize', mobileResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', mobileResize);
      };
    }, []);

    return (
        <div className='hide-scrollbar py-4 dark:text-white dark:bg-[#1f4550]' id='Review'>
            <section className='py-6 xl:m-auto xl:w-full'>
                <h1 className='xl:text-4xl font-extrabold flex justify-center py-3'>Customer's Review</h1>
                <Slider {...sliderSettings}>
                    {productdata11.map((item, index) => (
                        <div key={index} className="customer py-3 flex xl:ml-8 px-10 dark:text-black ">
                            <Summarycard
                                name={item.name}
                                rev={item.rev}
                                item={item}
                                rank={item.rank}
                                img={item.img}
                            />
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default Summary;


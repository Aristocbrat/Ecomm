import React from 'react'
import Itemcard from '../itemcardss/Itemcard';
import Deals from '../itemcardss/Deals';
import Elect from '../itemcardss/Elect';
import Furn from '../itemcardss/Furn';
import Furnint from '../itemcardss/Furnint';
import Sportsout from '../itemcardss/Sportsout';
import Sportbs from '../itemcardss/Sportbs';
import Clotandass from '../itemcardss/Clotandass';
import ClothingBs from '../itemcardss/Clothing';
import Btsk from '../itemcardss/Btsk';

const Filtered = ({ search, productdata }) => {
    const filteredData = productdata.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div>
         <div className="flex justify-center flex-wrap gap-12 mt-4 pd">
      {filteredData.map((item, index) => (
        <Itemcard
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
    </div>
    {filteredData.map((item, index) => (
        <ClothingBs 
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
    <div className="flex justify-center flex-wrap gap-12 mt-4 pd">
      {filteredData.map((item, index) => (
        <Clotandass
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Deals
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Elect
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Furn
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Furnint
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Sportsout
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Sportbs
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
      {filteredData.map((item, index) => (
        <Btsk
          key={index}
          title={item.title}
          price={item.price}
          img={item.img}
          item={item}
        />
      ))}
    </div>
    </div>
  )
}

export default Filtered

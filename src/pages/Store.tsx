import { useApiData } from "../data/ProductData";
import { Link } from "react-router-dom";
import CurrencyFormat from "../utilities/CurrencyFormat";
import { useState } from "react";


interface Product {
  id: number;
  image: string;
  description: string;
  price: number;
  title: string;
  category: string[]; // Ensure that the 'category' property is an array of strings
}
const Store = () => {
  const { apidata } = useApiData();
  console.log(apidata);
  
  const [activeBtn, setActiveBtn] = useState<number >(0)
  const handleButton = (number: number) => {
    setActiveBtn(number)
  }
  const [selectdCategory, setSelectedCategory] = useState<string | null>(null)
  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);

  }
  const filterCategory = selectdCategory ? apidata.filter((product: Product) => product.category.includes(selectdCategory)) : apidata
  console.log(filterCategory);
  
  return (
    <div>
      <div className=" container mx-auto poppins">

        <h1 className='text-center text-xl my-8'>Filter by Tag</h1>
        <div className="flex items-center justify-center gap-8 flex-wrap ">

          <button className={`border-2 border-black px-2 py-1 rounded-lg ${activeBtn === 0 ? 'bg-blue-500 active:bg-green-600' : ''
            }`}
            onClick={() => {
              handleCategoryFilter(null);
              handleButton(0);
            }}>All</button>
          <button className={`border-2 border-black px-2 py-1 rounded-lg ${activeBtn === 2 ? 'bg-blue-500 active:bg-green-600' : ''
            }`}
            onClick={() => {
              handleCategoryFilter("jewelery");
              handleButton(2);
            }}>jewelery</button>
            <button className={`border-2 border-black px-2 py-1 rounded-lg ${activeBtn === 1 ? 'bg-blue-500 active:bg-green-600' : ''
              }`}
              onClick={() => {
                handleCategoryFilter("men's clothing");
                handleButton(1);
              }}>men's clothing</button>
          <button className={`border-2 border-black px-2 py-1 rounded-lg ${activeBtn === 3 ? 'bg-blue-500 active:bg-green-600' : ''
            }`}
            onClick={() => {
              handleCategoryFilter("electronics");
              handleButton(3);
            }}>electronics</button>
          <button className={`border-2 border-black px-2 py-1 rounded-lg ${activeBtn === 4 ? 'bg-blue-500 active:bg-green-600' : ''
            }`}
            onClick={() => {
              handleCategoryFilter("women's clothing");
              handleButton(4);
            }}>women's clothing</button>
        </div>

        <h1 className='text-center text-2xl my-8'>Our Product</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  place-items-center   '>

          {
            filterCategory.map((data) => (
              <div key={data.id} className=' w-56 py-4 flex flex-col items-center md:items-start' >
                <div>

                  <img className='w-44 h-56  ' src={data.image} alt={data.description} />
                </div>
                <div className="mt-auto text-center md:text-left">
                  <h4>{data.title}</h4>

                  <p> {CurrencyFormat(data.price)}</p>
                  <button className='border-solid border-2 border-slate-950 p-2 py-1 cursor-pointer'>  <Link to={`/product/${data.id}`}>check more</Link></button>
                </div>

              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Store
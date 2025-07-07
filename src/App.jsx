
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [products,setProducts]=useState([]);
  const[current,setCurrent]=useState(0);
  const getProduct=async ()=>{
    const data=await fetch('https://dummyjson.com/products?limit=0');
    const result=await data.json();
    console.log(result);
    setProducts(result.products);
  }
  const PAGE_SIZE=10;
  const total_page=Math.ceil(products.length / PAGE_SIZE);
  const start=current*PAGE_SIZE;
  const end=start+PAGE_SIZE;
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <ul className="pagination">
            {
              current > 0 &&
              <li className="page-item">
                <a type='button' onClick={()=>setCurrent(current-1)} className='page-link'>Prev</a>
              </li>
            }
            {
              [...new Array(total_page)].keys().map((n)=>(
                <li className={`page-item ${n===current ? 'active' :''}`} key={n}>
                  <a type='button' onClick={()=>setCurrent(n)} className='page-link'>{n+1}</a>
                </li>
              ))
            }
            {
              current+1 < total_page &&
              <li className="page-item">
                <a type='button' onClick={()=>setCurrent(current+1)} className='page-link'>Next</a>
              </li>
            }
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            {
              products && products.slice(start,end).map((product)=>(
                <div className="mb-3" key={product.id}>
                  <Card product={product}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App

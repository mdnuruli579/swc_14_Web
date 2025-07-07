
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products,setProducts]=useState([]);
  const getProduct=async ()=>{
    const data=await fetch('https://dummyjson.com/products?limit=0');
    const result=await data.json();
    console.log(result);
    setProducts(result.products);
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {
              products && products.map((product)=>(
                <div className="mb-3" key={product.id}>
                  <div className="card" style={{
                    display:'flex',
                    flexDirection:'row',
                    padding:'10px',
                    maxWidth:'100%'
                  }}>
                    <img src={product.thumbnail} alt={product.title} style={{
                      width:'150px',
                      height:'auto',
                      objectFit:'cover',
                      borderRadius:'8px'
                    }} />
                    <div className="card-body">
                      <h5>{product.title}</h5>
                      <p>{product.description}</p>
                      <strong className='text-success'>${product.price}</strong>
                    </div>
                  </div>
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

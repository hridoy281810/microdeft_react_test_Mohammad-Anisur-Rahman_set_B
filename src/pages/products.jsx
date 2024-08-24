import React, { useEffect, useState } from 'react';

const AllProductPage = () => {
    const [products,setProducts] = useState([])
    console.log(products)
    useEffect(()=>{
    fetch(`https://react-interview.1putym.easypanel.host/api/product?email=anisurrahman01815001904@gmail.com`)
    .then(res=>res.json())
    .then(data=> setProducts(data))
    },[])
    return (
        <div className="px-60  pt-4">
          
        </div>
    );
};

export default AllProductPage;
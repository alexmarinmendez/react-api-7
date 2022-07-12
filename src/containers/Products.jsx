import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../components/Product';

//statefull = smart
const Products = () => {
    const [data, setData] = useState([]); //hook

    //componentDidMount
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=mate')
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.log(error));
    }, []);


  return (
    <>
        <h2>Coder Products</h2>
        <div>
        {
            data.length > 0 ? 
            data.map(item => (
                <Product key={item.id} name={item.title} />
            )) :
            <p>Cargando...</p>
        }
        </div>
    </>
  )
}

export default Products
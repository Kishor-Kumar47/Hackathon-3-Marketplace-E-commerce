'use client'
import SingleDetails from '@/components/SingleDetail'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

import { useParams } from 'next/navigation'

import React from 'react'

const Page = async () => {

    const {productId}:any = useParams();
    const products = await client.fetch(groq `*[_type == "product" ]{
        id,name,price,description,imagepath,category,discountPercentage}`);
    const product = products.find((product:any)=>product.id.current == productId);
    console.log(product);

  return (
    <div>
        <SingleDetails product={productId}/>
    </div>
  )
}

export default Page



// //////////////////////////////////////////////////////////////////////
// // app/shop/[productId]/page.tsx
// 'use client'
// import SingleDetails from '@/components/SingleDetail'
// import { client } from '@/sanity/lib/client'
// import { groq } from 'next-sanity'
// import { useParams } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// const Page = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       const products = await client.fetch(groq`*[_type == "product"]{id, name, price, description, imagepath, category, discountPercentage}`);
//       const product = products.find((prod: any) => prod.id.current === productId);
//       setProduct(product);
//     };

//     if (productId) {
//       fetchProductDetails();
//     }
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <SingleDetails product={product} />
//     </div>
//   );
// }

// export default Page;

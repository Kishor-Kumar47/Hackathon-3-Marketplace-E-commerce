import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'



const page  = async ({params:{id}}:{params:{id:string}}) => {
  const query = `*[_type == "product" &&  _id == $id]{
  name,
  "id": _id,
  description,
  price,
  category,
  stockLevel,
  isFeaturedProduct,
  "imagePath": image.asset->url
}[0]`

  const  product:Product | null = await client.fetch(query , {id})

  if(!product){
    return (
      <div>

      <h1>
        Product not found
      </h1>
      </div>
    )
      
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={product.imagePath} alt={product.name} width={600} height={400}/>
      <h1>
        {product.name}
      </h1>
      <p>
        {/* {product.description} */}
      </p>
      <p>
        {product.price}
      </p>
      <p>
        {product.category}
      </p>
      <p>
        {product.stockLevel}
      </p>
      <p>
          {product.isFeaturedProduct}
        </p>

    </div>
  )
}

export default page
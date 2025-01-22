'use client'
import Navbarr from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// right code

// ////////////////////////////////////////////////////////
// type Product = {
//   _id: string;
//   name: string;
//   imagePath: string;
//   description: string;
//   price: number;
//   category: string;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
// };

// async function getProducts(): Promise<Product[]> {
//   return client.fetch(`*[_type == 'product']`);
// }

// export default async function ShopPage() {
//   const products = await getProducts();

//   return (
//     <main>
//       <Navbarr bgColor='bg-white'/>
//       <Shophead headText='Shop' linkChange='shop'/>
//     <div className="bg-slate-200 ">
//       <h1 className="text-4xl font-bold  text-center p-10 ">Products</h1>
//       <div >
//       <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 ">
//         {products.map((product) => (
//           <li key={product._id}>
//             <Image
//               className="relative h-60 w-22 object-cover rounded-t-xl"
//              src={product.imagePath} alt={product.name} width={300} height={200}
//              />
//              <div className="absolute font-bold border p-2 -mt-10  hover:bg-black hover:text-white rounded-lg">
//               <Link href={''}>
//               <button>Add To Cart</button>
//               </Link>
//              </div>
//              <div className="px-4 py-3 w-72">
//             <h2 className="text-orange-600 font-bold text-2xl">{product.name}</h2>
//             <p className="text-gray-500 text-sm">{product.description}</p>
//             <p className="text-xl font-bold text-gray-700">Price: ${product.price}</p>
//             <div className="flex flex-col text-blue-700 p-2 rounded-lg">
//             <p>Category: {product.category}</p>
//             {/* <p>Stock Level: {product.stockLevel}</p>
//             <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p> */}
//             </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//     </main>
//   );
// }

// right code end

const showAlert = () => {
  alert("Product added to cart");
};
console.log("showAlert", showAlert);

type Product = {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
};

async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == 'product']`);
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main>
      <Navbarr bgColor="bg-white" />
      <Shophead headText="Shop" linkChange="shop" />
      <div className="bg-slate-200 ">
        <h1 className="text-4xl font-bold  text-center p-10 ">Products</h1>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 ">
            {products.map((product) => (
              <li key={product._id}>
                
                  <Image
                    className="relative h-60 w-22 object-cover rounded-t-xl"
                    src={product.imagePath}
                    alt={product.name}
                    width={300}
                    height={200}
                  />
                

                <div className="px-4 py-3 w-72">
                  <h2 className="text-orange-600 font-bold text-2xl">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <p className="text-xl font-bold text-gray-700">
                    Price: ${product.price}
                  </p>
                  <div className="flex flex-col text-blue-700 p-2 rounded-lg">
                    <p>Category: {product.category}</p>
                    <div className=" font-bold border p-2   hover:bg-black hover:text-white rounded-lg">
                      <Link href={""}>
                        <button onClick={showAlert}>Add To Cart</button>
                      </Link>
                    </div>
                    {/* <p>Stock Level: {product.stockLevel}</p>
            <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}



import Navbarr from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

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

// Function to fetch products with error handling
async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch(`*[_type == 'product']`);
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array to prevent build failure
  }
}

// Shop Page Component
export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main>
      <Navbarr bgColor="bg-white" />
      <Shophead headText="Shop" linkChange="shop" />
      <div className="bg-slate-200 ">
        <h1 className="text-4xl font-bold text-center p-10">Products</h1>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((product) => {
              // Skip rendering if product is missing required fields
              if (!product.imagePath || !product.name || !product.price) {
                console.warn("Product is missing required fields:", product);
                return null;
              }

              return (
                <li key={product._id}>
                  <Link href={`/product/${product._id}`}>
                    <Image
                      className="relative h-60 w-22 object-cover rounded-t-xl"
                      src={product.imagePath}
                      alt={product.name}
                      width={300}
                      height={200}
                    />
                  </Link>

                  <div className="px-4 py-3 w-72">
                    <h2 className="text-orange-600 font-bold text-2xl">{product.name}</h2>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                    <p className="text-xl font-bold text-gray-700">
                      Price: ${product.price}
                    </p>
                    <div className="flex flex-col text-blue-700 p-2 rounded-lg">
                      <p>Category: {product.category}</p>
                      <div className="font-bold border p-2 hover:bg-black hover:text-white rounded-lg">
                        <Link href={""}>
                          <button>Add To Cart</button>
                        </Link>
                      </div>
                      {/* Optional fields */}
                      {/* <p>Stock Level: {product.stockLevel}</p>
                      <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p> */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

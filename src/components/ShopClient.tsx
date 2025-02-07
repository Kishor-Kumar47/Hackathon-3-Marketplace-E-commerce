'use client';

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart } from "../../store/cartSlice";


// Define product type
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

// Props for ShopClient
interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems)

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image:product.imagePath,
        category:product.category,
      })
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-10">Products</h1>
      <div className="bg-slate-200">
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
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
                  Price: Rs: {product.price}
                </p>
                <button
                  className="font-bold border p-2 hover:bg-black hover:text-white rounded-lg mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

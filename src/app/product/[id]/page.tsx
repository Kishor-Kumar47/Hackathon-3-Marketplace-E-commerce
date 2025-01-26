import Navbarr from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  // Sanity query to fetch the product details
  const query = `*[_type == "product" && _id == $id]{
    name,
    "id": _id,
    description,
    price,
    category,
    stockLevel,
    isFeaturedProduct,
    discountPercentage,
    "imagePath": image.asset->url
  }[0]`;

  const product: Product | null = await client.fetch(query, { id });

  // Handle product not found
  if (!product) {
    return (
      <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-gray-700">Product Not Found</h1>
      </div>
      </main>
    );
  }

  return (
    <main>
      <Navbarr bgColor='bg-white'/> 
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2 text-gray-500">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>/</li>
          <li>
            <a href="/shop" className="hover:underline">Shop</a>
          </li>
          <li>/</li>
          <li className="font-semibold text-gray-700">{product.name}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center items-start">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-lg shadow-md md:h-[400px]"
          />
        </div>

        {/* Product Details */}
        <div>
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-gray-600 mt-2">
            Rs. {product.price.toLocaleString()}
          </p>

          {/* Stock Level */}
          <p
            className={`mt-4 text-lg ${
              product.stockLevel > 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
          </p>

          {/* Discount */}
          {product.discountPercentage > 0 && (
            <p className="text-yellow-500 font-medium mt-2">
              Discount: {product.discountPercentage}% Off
            </p>
          )}

          {/* Featured Badge */}
          {product.isFeaturedProduct && (
            <p className="mt-2 text-yellow-500 font-semibold">🌟 Featured Product</p>
          )}

          {/* Description */}
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Category */}
          <p className="text-gray-500 mt-4 italic">Category: {product.category}</p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              className={`px-6 py-2 text-white rounded-lg ${
                product.stockLevel > 0
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={product.stockLevel === 0}
            >
              {product.stockLevel > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
            <p className="text-gray-500 mt-2 italic">
              (Placeholder: Add dynamic customer reviews here.)
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default ProductPage;




























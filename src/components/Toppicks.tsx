import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Toppicks = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Shooting Stars",
      price: 16000,
      image: "/pick-pro-1.png",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
    },
    {
      id: 2,
      name: "Falling Comet",
      price: 24000,
      image: "/shop-pro-5.png",
      description:
        "Biodiesel artisan direct trade disrupt pop-up organic. Street art everyday carry swag.",
    },
    {
      id: 3,
      name: "Milky Way",
      price: 25000,
      image: "/pick-pro-3.png",
      description:
        "Quinoa dreamcatcher keffiyeh, woke paleo gluten-free narwhal microdosing.",
    },
    
  ];

  

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Top Picks For You
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Explore our best selections, crafted to elevate your space.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 md:w-1/3 flex flex-col text-center items-center  rounded-lg shadow-md hover:shadow-lg"
            >
              <Image
                className="rounded-lg"
                src={product.image}
                width={300}
                height={300}
                alt={product.name}
              />
              <div className="flex-grow mt-4">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {product.name}
                </h2>
                
                <p className="text-gray-800 font-semibold">RS: {product.price}</p>
                <Link href={''} className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-black  border-b border-black border-b-4 py-2 px-8  text-lg">
          View More
        </button>
      </div>
    </section>
  );
};

export default Toppicks;

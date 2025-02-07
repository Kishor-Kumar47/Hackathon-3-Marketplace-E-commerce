import Navbarr from "@/components/Navbar";
import Link from "next/link";

interface IParams {
    searchParams: {
        amount:any;
    };
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
        <main>
            <Navbarr bgColor='bg-white' />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-green-600">
                    🎉 Thank You! 🎉
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                    Your payment of <span className="font-semibold">Rs: {searchParams.amount}</span> was successful paid.
                </p>
                <p className="text-gray-500 mt-2">We appreciate you! 😊</p>

                <div className="flex gap-x-4">
                <Link href="/shop">
                    <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300">
                        BuyMore
                    </button>
                </Link>
                <Link href="/">
                    <button className="mt-6 px-6 py-3 bg-orange-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition duration-300">
                        Home 
                    </button>
                </Link>
                </div>
            </div>
        </div>
        </main>
    );
};

export default PaymentSuccess;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Image from "next/image";
import Link from "next/link";
import { removeFromCart } from "../../../store/cartSlice";
import { MdDelete } from "react-icons/md";
import { Close } from "@radix-ui/react-dialog";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const removeItemsHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div>
      <h1 className="text-xl text-gray-900 ">Shopping Cart</h1>
      {cartItems.length == 0 && (
        <div className=" flex flex-col overflow-auto items-center justify-center ">
          <h1 className="text-md text-gray-800 font-semibold mt-32">
            Your Cart is Empty
          </h1>
        </div>
      )}
      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex pb-4 border-b-2 border-gray-300 border-opacity-60 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={82}
                    height={82}
                    className="object-cover mb-4  h-20 rounded-md"
                  />
                  <div className="ml-2 flex flex-col justify-center">
                    <h1 className="text-sm w-4/5 font-semibold truncate">
                      {item.name}
                    </h1>
                    <h1 className="text-sm w-4/5 font-semibold text-green-600 truncate">
                      {(item.price * item.quantity).toFixed(2)}
                    </h1>
                    <h1 className="text-sm w-4/5 font-semibold text-blue-600 truncate">
                      Q: {item.quantity}
                    </h1>

                    <div>
                      <button
                        onClick={() => {
                          removeItemsHandler(item.id);
                        }}
                        className="text-orange-400 text-xl"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Close>
            <div>
              <Link
                href="/viewcart"
                className="bg-black px-4 p-1 text-gray-200 rounded-xl"
              >
                View cart
              </Link>
            </div>
          </Close>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;

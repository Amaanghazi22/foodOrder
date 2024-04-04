import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCards from './CartCards';
import { clearCart } from '../app/cartSlice';

function Cart() {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleEmptyCart = () => {
        dispatch(clearCart())
        console.log("Delete clicked!!");
    }

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold bg-black text-white my-2'>Your Cart</h1>
            {cartItems.length === 0 ? (
                <h1> The Cart is empty, can't proceed...</h1>
            ) : (
                cartItems.map((item) => (
                    <CartCards key={item?.card?.info?.id} cartData={item} />
                ))
            )}

            {/* Empty cart button */}
            {cartItems.length > 0 && (
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleEmptyCart}>Empty Cart</button>
            )}
        </div>
    );
}

export default Cart;

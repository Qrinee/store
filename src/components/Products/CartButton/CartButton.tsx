import { useEffect, useState } from "react";
import './CartButton.css'
import { CartItem } from "../../../types";


export function CartButton({ id }: { id: number }) {
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = cart.find(item => item.id === id);
        
        if(!cartItem) return;
        
        setQuantity(cartItem.quantity);
        setShowPicker(true);

    }, [id]);

    const handlePickerChange = (change: number) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 0) {
            setQuantity(newQuantity);
            newQuantity === 0 ? removeFromCart() : updateCart(newQuantity)
        }
    };

    const updateCart = (newQuantity: number) => {
        const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex(item => item.id === id);
        existingItemIndex !== -1 ? cart[existingItemIndex].quantity = newQuantity : cart.push({ id, quantity: newQuantity })
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeFromCart = () => {
        let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cart));
        setShowPicker(false);
    };

    const handleCart = () => {
      setShowPicker(true)
      handlePickerChange(1)
    }

    return (
        <>
            {showPicker ? (
                <div className="select-number">
                    <button className="minus" onClick={() => handlePickerChange(-1)}>-</button>
                    <div className="num">{quantity}</div>
                    <button className="plus" onClick={() => handlePickerChange(1)}>+</button>
                </div>
            ) : (
                <div className='button-buy' onClick={() => handleCart()}>Add to cart</div>
            )}
        </>
    );
}

import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const ShoppingCartProvider = (props) => {
    const { children } = props;
    const [ cartData, setCartData ] = useState(initialState);

    const addToCart = (product) => {
        if (cartData.length > 0) {
            const productInCart = cartData.filter(elem => elem.id === product.id);
            if (productInCart.length > 0) {
                const newData = cartData.map(elem => {
                    if (elem.id === product.id) {
                        return ({
                            ...elem,
                            cantidad: ++elem.cantidad,
                        })
                    } else {
                        return elem;
                    }
                });
                setCartData(newData);
            } else {
                const newData = cartData.slice();
                newData.push({
                    ...product,
                    cantidad: 1,
                });
                setCartData(newData);
            }
        } else {
            const newData = [];
            newData.push({
                ...product,
                cantidad: 1,
            });
            setCartData(newData);
        }
    }

    const removeFromCart = (idProduct) => {
        const newData = cartData.slice();
        let remove = null;
        let removedData = newData.map((elem, key) => {
            if (elem.id === idProduct) {
                if (elem.cantidad > 1) {
                    return ({
                        ...elem,
                        cantidad: --elem.cantidad,
                    })
                } else {
                    remove = key;
                    return elem;
                }
            } else {
                return elem;
            }
        });
        if (remove !== null ) {
            removedData.splice(remove, 1);
        }
        setCartData(removedData);
    }

    const payCart = () => {
        setCartData([]);
    }

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartData)) ?? [];    
    }, [cartData]);

    return (
        <ShoppingCartContext.Provider value={{ cartData, addToCart, removeFromCart, payCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}
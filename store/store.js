import create from 'zustand';
import Cart from './../pages/cart';

export const useStore = create (
    (set) => ({
        // CART
        Cart : {
            pizzas : []
        },

        // ADD PIZZA IN CART
        addPizza : (data) => 
        set ((state) => ({
            Cart: {
                pizzas: [...state.Cart.pizzas, data]
            }
        })),

        // REMOVE PIZZA
        removePizza : (index) => 
        set((state) => ({
            Cart : {
                pizzas : state.Cart.pizzas.filter((_, i) => i !=index)
            }
        }))
    })
)
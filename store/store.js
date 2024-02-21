import create from 'zustand';
import cart from './../pages/cart';

export const useStore = create (
    (set) => ({
        // CART
        cart : {
            pizzas : []
        },

        // ADD PIZZA IN CART
        addPizza : (data) => 
        set ((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }
        })),

        // REMOVE PIZZA
        removePizza : (index) => 
        set((state) => ({
            cart : {
                pizzas : state.cart.pizzas.filter((_, i) => i !=index)
            }
        }))
    })
)
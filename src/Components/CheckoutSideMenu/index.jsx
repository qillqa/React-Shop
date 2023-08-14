import { useContext } from 'react'   
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { XMarkIcon } from '@heroicons/react/24/solid'   
import { totalPrice } from '../../utils'

import './styles.css'

function CheckoutSideMenu () {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        // Order accumulator 
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
    
    return (
        // <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>            
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer" 
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }                
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    {/* <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span> */}
                    <span className='font-medium text-2xl'>
                        { context.cartProducts ? totalPrice(context.cartProducts): 0 }
                    </span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='bg-black py-3 text-white w-full rounded-lg'
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>                
                </Link>
            </div>
        </aside>
    )
}   

export default CheckoutSideMenu
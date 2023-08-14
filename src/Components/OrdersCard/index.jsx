import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'   

function OrdersCard (props) {  
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 border border-gray rounded-lg p-4 w-80 shadow-lg">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <div className='flex gap-2'>
                        <CalendarDaysIcon className='h4 w-4' />
                        <span className='font-light'>01.02.23</span>
                    </div>
                    <div className='flex gap-2'>
                        <ShoppingBagIcon className='h4 w-4' />
                        <span className='font-light'>{totalProducts} articles</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>$ {totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default OrdersCard
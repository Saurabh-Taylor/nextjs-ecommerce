import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";

async function CartButton() {
  const numItemsInCart = 9
  return (
    <Button asChild size='icon' variant={"outline"} className='relative flex justify-center items-center' >
      <Link href={'/cart'} >
        <LuShoppingCart/>
        <span className=' absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex justify-center items-center' > 
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
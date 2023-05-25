'use client';
import Image from 'next/image'

const Avater = () => {
  return (
    <Image className='rounded-full'
       width={30}
       height={30}
       src={"/images/placeholder.jpg"}
       alt='Avater'
    />
  )
}

export default Avater
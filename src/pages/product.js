import React from 'react'

export default function Product() {
  return (
    <div className='bg-white pt-[120px]'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Products</h1>
        <p className='text-lg'>This is the product page content.</p>
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>Our Products</h2>
          <ul className='list-disc list-inside'>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

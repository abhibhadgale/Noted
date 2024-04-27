import React from 'react'

function Cards({ item }) {
  return (
    <div className='mt-4 my-4 p-3'>
        <div className="card w-92 bg-base-100 shadow-xl  border-[1px] rounded-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
            <figure><img src={item.image} alt="Item" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">${item.price}</div> 
                <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Cards

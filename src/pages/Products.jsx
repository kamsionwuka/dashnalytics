import React from 'react'
import { wreen_action, wreen_graybg } from '../assets/images'
import { IoTrashBinSharp } from 'react-icons/io5'
import { productsData } from '../data/productsData'

export default function Products() {
    return (
        <main className="flex flex-col gap-4 py-10 px-4 bg-primary">
            <div className="overflow-x-scroll w-full p-4 rounded-md shadow-lg bg-white text-slate-600">
                <table className="w-full min-w-[50rem]">
                    <thead>
                        <tr>
                            <th colspan={6}>
                                <h3 className="text-lg md:text-2xl font-bold text-left">Product List</h3>
                            </th>
                        </tr>
                        <tr className='border-b boarder-slate-200 opacity-70 '>
                            <th className='px-1'>#</th>
                            <th className='py-2 text-left'>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-500 text-center">
                        {
                            productsData.length ? 
                            productsData.map((product,i) => (
                                <tr key={product.id}>
                            <td>{i+1}</td>
                            <td>
                                <div className="flex items-center gap-2 p-1 flex-1">
                                    <img src={product.image} alt={product.productname} className="h-8 w-8 rounded-md object-cover object-center flex-shrink-0" />
                                    <h3 className='.text-base.md:text-lg.font-medium.text-left'>{product.productname}</h3>
                                </div>
                            </td>
                            <td>&#8358; {product.price.toLocaleString()}</td>
                            <td>{product.inventories}</td>
                            <td><div className={`p-1 px-4 ${product.inventories > 0 ? "bg-green-500" : "bg-slate-400"} text-white text-sm w-max mx-auto rounded-sm`}>{product.status}</div></td>
                            <td><div className="p-1 px-4 cursor-pointer bg-[#f66] text-white text-sm w-max mx-auto rounded-sm"><IoTrashBinSharp /></div></td>
                        </tr>
                            ))
                        :
                        <tr>
                            <td colSpan={6} className="text-center text-dark/80 py-6">No product(s) found</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

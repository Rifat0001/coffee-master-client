import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detials = useLoaderData();
    return (
        <div>
            <div className="card bg-base-100 w-1/2 mx-auto my-20 shadow-xl">
                <div className='flex'>
                    <figure><img src={detials.url} /></figure>
                    <div className="flex justify-between w-full mx-8 py-10 items-center">
                        <div>
                            <h2 className="card-title">Name: {detials.name}</h2>
                            <p>Quantity: {detials.quantity}</p>
                            <p>Supplier: {detials.supplier}</p>
                            <p>Category: {detials.category}</p>
                            <p>Taste: {detials.taste}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
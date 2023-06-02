import React from 'react';

const AddCoffee = () => {
    return (
        <div className='px-40'>
            <h1 className='text-xl text-indigo-600 font-bold mt-10'>Add Coffee</h1>
            <form className='my-8'>
                <div className='flex my-2'>
                    <input type="text" name='coffee-name' placeholder="Coffee Name" className="me-2 input input-bordered input-primary w-full" />
                    <input type="text" name='quantity' placeholder="Available Quantity" className="input ms-2 input-bordered input-primary w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" name='supplier' placeholder="Supplier Name" className="me-2 input input-bordered input-primary w-full" />
                    <input type="text" name='taste' placeholder="Taste" className="input ms-2 input-bordered input-primary w-full" />
                </div>
                <div className='flex my-2'>
                    <input type="text" name='category' placeholder="Category" className="me-2 input input-bordered input-primary w-full" />
                    <input type="text" name='details' placeholder="Details" className="input ms-2 input-bordered input-primary w-full" />
                </div>
                <div className=' my-2'>
                    <input type="text" name='url' placeholder="Photo Url" className="me-2 input input-bordered input-primary w-full" />
                </div>
                <button className="btn btn-primary text-white w-full">Button</button>
            </form>
        </div>
    );
};

export default AddCoffee;
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, url }
        console.log(newCoffee);

        // send data to server side use post method to trigger server side App.post function 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className='px-40'>
            <h1 className='text-xl text-indigo-600 font-bold mt-10'>Add Coffee</h1>
            <form className='my-8' onSubmit={handleAddCoffee}>
                <div className='flex my-2'>
                    <input type="text" name='name' placeholder="Coffee Name" className="me-2 input input-bordered input-primary w-full" />
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
                <button className="btn btn-primary text-white w-full">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, url } = coffee;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className='flex'>
                    <figure><img src={url} /></figure>
                    <div className="flex justify-between w-full mx-8 py-10 items-center">
                        <div>
                            <h2 className="card-title">Name: {name}</h2>
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                            <p>Taste: {taste}</p>
                        </div>

                        <div className="btn-group btn-group-vertical gap-3">

                            <Link to={`details/${_id}`}><button className="btn bg-indigo-500 text-white">View</button>
                            </Link>

                            <Link to={`updateCoffee/${_id}`}><button className="btn bg-green-500 text-white">Edit</button>
                            </Link>
                            <Link className=''>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn bg-orange-500 text-white ">Delete</button>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;
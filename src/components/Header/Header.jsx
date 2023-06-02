import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-indigo-100 px-36">
                <div className="flex-1">
                    <Link className='btn btn-ghost normal-case text-2xl text-indigo-700 font-bold' to="/">Coffee Master</Link>

                </div>
                <div className="flex-none">
                    <Link className='font-bold text-xl mx-8' to="/">Home</Link>
                    <Link className='font-bold text-xl mx-8' to="/addCoffee">AddCoffee</Link>

                </div>

            </div>
        </div >
    );
};

export default Header;
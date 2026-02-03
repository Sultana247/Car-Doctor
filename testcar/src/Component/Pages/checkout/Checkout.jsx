import React, { useContext } from 'react';
import CheckoutBanner from './CheckoutBanner';
import Header from '../../Shared component/Header';
import { useLoaderData } from 'react-router';
import AuthContext from '../../Provider/AuthContext';

const Checkout = () => {
    const {user}=useContext(AuthContext);
    const data = useLoaderData();
    const {title, img, price}=data
    const handleCheckout=(e)=>{
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const date = form.date.value
        const phone = form.phone.value;
        const bookedService ={
            name,
            email: user.email,
            phone,
            service: title,
            img: img,
            price,
            date
        }

        fetch(`http://localhost:5000/bookedService`, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(bookedService)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.insertedId){
                alert("Order Confirmed!")
            }
        })
        
    }
    return (
        <div>
            <Header></Header>
            <CheckoutBanner></CheckoutBanner>
            <div className='dark-7-bg p-40'>
                <form onSubmit={handleCheckout} className=' '>
                    <div>
                        <div className='flex gap-4 mb-8'>
                        
                        <input type="text" className="input w-1/2" placeholder="name" name='name' />
                        <input type="number" className="input w-1/2" placeholder="Phone number" name='phone'/>

                    </div>
                    <div className='flex gap-4 mb-8'>
                        <input type="email" className="input w-1/2" placeholder="Email" defaultValue={user.email} name='email' />
                        <input type="text" className="input w-1/2" placeholder="Service name" defaultValue={title} name='service' />
                    </div>
                    <div className=' mb-8'>
                        <input type="date" className="input w-full" placeholder="date" name='date' />
                        
                    </div>
                    <button className="btn mt-4 w-full primary-color text-white">Order Confirm</button>
                    </div>
                    

                   
                </form>
            </div>
        </div>
    );
};

export default Checkout;
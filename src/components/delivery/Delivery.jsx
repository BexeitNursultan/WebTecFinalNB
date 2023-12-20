import React from 'react';
import DData from './DData';
import './Delivery.css'; 

const Delivery = () => {
    return (
        <div className="delivery-container">
            <img src={DData} alt="Delivery" className="delivery-image" />
            <ul className='delivery-list'>  Shipping Costs
                <li>Standard Delivery: A nominal fee of 1,000 KZT applies for standard delivery orders.</li>
                <li>Expedited Delivery: Available at a rate of 2,000 KZT for faster delivery within major cities.</li>
                <li>Free Shipping: Enjoy free standard shipping on orders over 20,000 KZT!</li>
                </ul>
            <p className="delivery-text">
                We proudly serve a wide range of locations throughout Kazakhstan, ensuring that no matter where you are,
                the latest fashion is just a click away. From the bustling streets of Almaty and Nur-Sultan to the serene landscapes of Shymkent and Aktau,
                our delivery network covers both urban and rural areas.

                Our standard delivery timeframe is 3-5 business days for most regions. For orders in Almaty and Nur-Sultan, we offer an expedited service where you can receive your purchases within 1-2 business days. Please note that delivery times may vary slightly during peak shopping seasons or due to unforeseen circumstances such as weather conditions or logistical challenges.
                Once your order is dispatched, you will receive a confirmation email with a tracking number. This allows you to track the progress of your shipment on our website, giving you peace of mind and clarity on the estimated delivery date.
            </p>
            
        </div>
    );
}

export default Delivery;

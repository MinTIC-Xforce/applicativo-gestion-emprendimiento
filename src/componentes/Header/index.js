import React from 'react';
import Nike from "../../images/pan.jpg";

export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={Nike} alt="" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>INCIO</a>
                </li>
                <li>
                    <a href='#'>PRODUCTOS</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>0</span>
            </div>
        </header>
    )
}
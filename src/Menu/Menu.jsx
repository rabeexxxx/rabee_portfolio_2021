
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className='menu-flex'>
            <Link to='/projects'>
            <div className='menu-item item1' id='item1'>Projects</div>
            </Link>
            
            <div className='menu-item item2' id='item2'>Skilss</div>
            <div className='menu-item item3' id='item3'>Contact</div>
            <div className='menu-item item4' id='item4'>Redux</div>
            <div className='menu-item item5' id='item5'>Api</div>
            <div className='menu-item item6' id='item6'>My CV</div>
        </div>
    );
}

export default Menu;
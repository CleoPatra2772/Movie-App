import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    let currentYear = new Date().getFullYear();
    

    return(
        <div className='footer'>
            <div>Movie App</div>
            <div>©️{currentYear}, Movie, Inc. or its affiliates</div>
        </div>
    )
}

export default Footer;
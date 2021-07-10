import React from 'react';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
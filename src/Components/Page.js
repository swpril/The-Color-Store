import React from 'react';
import '../Styles/Page.css';

const Page = ({ children }) => {
    return (
        <section className='page'>{children}</section>
    )
}

export default Page;
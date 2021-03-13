import React from 'react';

import './page.css';

const Page = ({ children }) => {
  return <section className='page'>{children}</section>;
};

export { Page };

import React from 'react';
const Footer = (props) => {
    const { desc } = props;
    return <footer className="bg-dark text-white p-3 text-center">{desc}</footer>;
};
export default Footer;
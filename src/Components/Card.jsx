import React from "react";
import { Card as CardBootstrap } from 'react-bootstrap';
const Card = (props) => {
    const { title, desc, photo } = props;
    return (
        <CardBootstrap className="bg-primary" style={{ width: '18rem', border: '1px solid black', }}>
            <CardBootstrap.Img variant="top" src={photo} style={{ width: '100%' }} />
            <CardBootstrap.Body>
                <CardBootstrap.Title>{title}</CardBootstrap.Title>
                <CardBootstrap.Text>{desc}</CardBootstrap.Text>
            </CardBootstrap.Body>

        </CardBootstrap>
    )
};

export default Card;
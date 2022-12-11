import React from "react";
import '../CSS/AboutUs.css'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import imgAbout from '../Images/logo_kecil.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Stack } from "react-bootstrap";

const AboutUs = () => {
    return (
        <>
        <Card className="container py-3 container_aboutUs" style={{ width: '18rem' }}>
            <Card.Img className="img_about" variant="top" src={imgAbout}/>
            <Card.Body className="card_body">
                <Card.Title>Contact-Us</Card.Title>
                <Card.Text className="card_text">careertify@gmail.com</Card.Text>
                <Stack className="icon_about" direction="horizontal" gap={4}>
                    <Button href="https://www.instagram.com/" target="blank" className="subIcon"> <FaFacebook /></Button>
                    <Button href="https://www.instagram.com/" target="blank" className="subIcon"> <FaTwitter /></Button>
                    <Button href="https://www.instagram.com/" target="blank" className="subIcon"> <FaGithub /></Button>
                    <Button href="https://www.instagram.com/" target="blank" className="subIcon"> <FaInstagram /></Button>
                </Stack>
            </Card.Body>
        </Card>
        </>
    )

}

export default AboutUs;

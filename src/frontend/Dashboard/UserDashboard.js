import { Button } from 'reactstrap'
import React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import './rootpage.css'
import Mensweardata from './Data/Mensweardata'
import {
    Link
} from 'react-router-dom'
function UserDashboard() {
    return (
        <div>
            <h1 className='shoplogo'>Happy Buying</h1>
            <Link className='btn btn-danger' to='/'>Logout</Link>
            <div className='fullcrousel'>
                <div style={{flex:"1000rem"}}>
                    <Carousel className='crouselimg'>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>One</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>Two</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>Three</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='crousel2'>
                    <h4>OFFER ENDING SOON</h4>
                </div>
            </div>

            <h2>Cards</h2>
            <div className='cardblockstyle'>
                {
                    Mensweardata.map((item) => (
                        <Card className='cardstyle' >
                            <Card.Img variant='top' src={item.src} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <h6>Ratings: 5/5</h6>
                                <Card.Text>
                                    This is the card text.<br/>
                                    <b>{item.name}</b>
                                </Card.Text>
                                <Button className='btn-warning'>Add to Cart</Button>
                                <Button className='btn-success' style={{ marginLeft: '0.5rem' }}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default UserDashboard
import { Button } from 'reactstrap'
import React from 'react'
import Card from 'react-bootstrap/Card'
import './rootpage.css'
import Mensweardata from './Data/Mensweardata'
import {
    Link
} from 'react-router-dom'
function AdminDashboard() {
    return (
        <div>
            <h1 className='shoplogo'>Happy Buying</h1>
            <Link className='btn btn-danger' to='/'>Logout</Link>
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
                                <Button className='btn-warning'>Update</Button>
                                <Button className='btn-success' style={{ marginLeft: '0.5rem' }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminDashboard
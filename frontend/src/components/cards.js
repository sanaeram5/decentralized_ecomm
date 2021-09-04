import React from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap';
import img1 from '../images/cardimage1.jpeg';
import img2 from '../images/cardimage2.jpeg';
import img3 from '../images/cardimage3.jpeg';
import img4 from '../images/cardimage4.jpeg';
import img5 from '../images/cardimage5.jpeg';
import img6 from '../images/cardimage6.jpeg';


const Cards = () => {
    return (
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title as="h3">boAt Airdopes 131 Bluetooth Headset </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Cherry Blossom, True Wireless)</Card.Subtitle>
                    <h2>₹1,299</h2>
                    <Card.Text>
                        Bring home the boAt Airdopes 131 that comes with a carrying case.
                        This carrying case also acts as a 650 mAh portable charger that extends the playback time of these
                        earbuds by up to 15 hours, i.e. 4 times its normal charging capacity.
                        The normal battery capacity of each of these earbuds is 40 mAh and this delivers up to 3 hours of playback time.
                        These earbuds feature Bluetooth v5.0 technology that delivers a stable connection that lets your rock on without
                        connectivity issues.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title as="h3">SanDisk Cruzer Blade USB 32 GB </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Black, Red)</Card.Subtitle>
                    <h2>₹1,299</h2>
                    <Card.Text>
                        Meet the SanDisk Cruzer Blade 32 GB pendrive - your friendly storage device.
                        Store all that you want, from movies to songs, pictures to videos, PDF files to documents, this in USB 2.0.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title as="h3">DANIEL WELLINGTON Rose Gold Black Analog Watch</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(DW00100212)</Card.Subtitle>
                    <h2>₹11,599</h2>
                    <Card.Text>
                    This is a genuine Daniel Wellington product. The product comes with a standard Manufacturer Warranty of 2 years.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                    <Card.Title as="h3">Orient Electric Fabri Press DIFP10BP 1000 W Dry Iron </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Blue, Black)</Card.Subtitle>
                    <h2>₹550</h2>
                    <Card.Text>
                        Bring home this iron from Orient for a smooth and quick ironing experience. 
                        Featuring the Dupont American Heritage, non-stick soleplate, a 360-degree swivel cord, 
                        and a temperature-control knob, this iron is equipped to handle it all.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                    <Card.Title as="h3">Butterfly Arrow 500 W Mixer Grinder </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(3 Jars, Grey)</Card.Subtitle>
                    <h2>₹1,849</h2>
                    <Card.Text>
                    Experience superior grinding performance and convenience with this mixer grinder from Butterfly. 
                    You can easily make your favorite health drinks, grind nuts or spices, and make yummy chutneys 
                    in its three different stainless steel jars. 
                    It has a powerful 500 W motor and its Three-speed Control setting makes blending and grinding extremely easy.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                    <Card.Title as="h3">Coocaa 127 cm (50 inch) Ultra HD (4K) </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(50S6G Pro)</Card.Subtitle>
                    <h2>₹32,999</h2>
                    <Card.Text>
                    ts Infinity Screen will let you watch content from one corner of the frame to the other without any limit. So, your favourite content will appear rich and crystal-clear. Also, you can use it to play games without facing any speed-related issue.
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button> {' '} <Button variant="danger">Buy Now</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default Cards;


import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from './../img/laptop.jpg';

const HomeCarousel=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return <div className="carousel-box">
        <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="Laptops"
        />
        <Carousel.Caption>
          <h3>Laptops</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="Mobile"
        />

        <Carousel.Caption>
          <h3>Mobile</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="Books"
        />

        <Carousel.Caption>
          <h3>Books</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
}

export default HomeCarousel;

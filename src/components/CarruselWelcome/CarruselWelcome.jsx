import Carousel from 'react-bootstrap/Carousel';
import './CarruselWelcome.css';


function CarruselWelcome() {
  return (
    <>
    <Carousel className='carrusel-fondo'>
      <Carousel.Item>
        <img className='imagen-promo' src="./img/carrusel1.png" alt="" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <img className='imagen-promo' src="./img/carrusel2.png" alt="" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    {/* <h3 className='promo-carrusel'> Descuentos llevando más de 2 botellas </h3> */}
    </>
  );
}

export default CarruselWelcome;
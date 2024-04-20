import Carousel from 'react-bootstrap/Carousel';
import './CarruselWelcome.css';


function CarruselWelcome() {
  return (
    <Carousel className='carrusel-fondo'>
      <Carousel.Item>
        <img className='imagen-promo' src="https://i.pinimg.com/736x/b8/aa/83/b8aa83005006603849fe1d2fbea65ff6.jpg" alt="" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <img className='imagen-promo' src="https://cdn.shopify.com/s/files/1/0452/4910/1974/files/Promociones-Club-De-Vinos.jpg?v=1602889255" alt="" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <img className='imagen-promo' src="https://static.misionesonline.news/wp-content/uploads/2018/11/Cavas-1200x628-20-5hi9158kkuv0.jpg" alt="" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselWelcome;
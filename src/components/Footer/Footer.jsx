import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
        <p className="aclaracion-web">*No se realizan transacciones a través del sitio, sólo pedidos al whatsapp*</p>
    <div className='footer-div container'>
        <h5>Gracias por visitar nuestro sitio</h5>
        <p className='d-flex justify-content-center gap-3'>Seguinos en Instragram  <a target='blank' href="https://www.instagram.com/wine.meeting_/"><i className="fa-brands fa-instagram"></i></a></p>

        <p className='d-flex justify-content-center gap-3'>Comunicate con nosotras por WhatsApp <a target='blank' href="https://api.whatsapp.com/send/?phone=5492612051027&text&type=phone_number&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a></p>

        <p>Encontranos en Casa Amalfi 272 Emilio Civit Ciudad Mendoza.</p>

        <div className='footer-iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.373555002223!2d-68.8561615227597!3d-32.888290373617394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09da653eab15%3A0x181b4713fc842770!2sCasa%20Amalfi!5e0!3m2!1ses!2sar!4v1715484067746!5m2!1ses!2sar"></iframe>
        </div>

        <p className='footer-final'>© 2024 Wine Meeting - Mendoza - Argentina</p>
    </div>
    </section>
  )
}

export default Footer
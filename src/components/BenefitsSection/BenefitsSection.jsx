import './BenefitsSection.css'

const BenefitsSection = () => {

    return (
        <section className='BenefitsSection'>
            <div className='div-1'>
                <img className='img-ben' src="./img/beneficio_hoja.png" alt="" />
                <p className='p-violeta'>Productos de origen seleccionado</p>
                <p className='p-negra'>Calidad premium en cada elección</p>
            </div>

            <div className='div-2'>
                <img className='img-ben' src="./img/beneficio_taza.png" alt="" />
                <p className='p-violeta'>Experiencias únicas</p>
                <p className='p-negra'>Talleres y degustaciones con reserva previa</p>
            </div>

            <div className='div-3'>
                <img className='img-ben' src="./img/beneficio_corazon.png" alt="" />
                <p className='p-violeta'>Atención personalizada</p>
                <p className='p-negra'>Te asesoramos para que disfrutes más</p>
            </div>

        </section>

    )
}

export default BenefitsSection;
//Amanda disse que vai implementar o esquema de tabela p dentro da div ver com ela dps.
//O CSS vai ter que ser um pouco refatorado pois estamos usando muito em e isso pode dar ruim dependendo da tela.
import './Carteira.css';

const Carteira = () => {


return (
    <div className='background-img-carteira'>
        <h1 className="titulo-carteira">Invext - Minha Carteira</h1>
        <div className='div-patrimonio'>
            <div className='div-titulo-patrimonio'> 

                <h2 className='titulo-patrimonio'>Patrimônio</h2>

            </div>
            <div className='div-ativos'>
                <div className='div-barra'>

                </div>
            </div>
            
        </div>

        <div className='div-rentabilidade'>

        </div>
    </div>
)

}

export default Carteira
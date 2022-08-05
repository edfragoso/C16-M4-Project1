import './PaletaDetalhesModal.css'
import Modal from 'components/Modal/Modal';

function PaletaDetalhesModal({paleta, closeModal}) {
    return (
        <Modal closeModal={closeModal}>
            
            <div className="PaletaDetalhesModal">
                <div>
                    <div className='PaletaDetalhesModal__titulo'>{paleta.titulo}</div>
                    <div className='PaletaDetalhesModal__preco'>R$ {Number(paleta.preco)}</div>
                    <div className='PaletaDetalhesModal__descricao'><b>Sabor:</b>{paleta.sabor}</div>
                    {paleta.recheio && <div className='PaletaDetalhesModal__descricao'><b>Recheio{paleta.recheio}</b></div>}
                    <div className='PaletaDetalhesModal__descricao'><b>Descrição</b>{paleta.descricao}</div>
                </div>
                <img src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} className="className='PaletaDetalhesModal__foto" />
            </div>

        </Modal>
    );
};

export default PaletaDetalhesModal;
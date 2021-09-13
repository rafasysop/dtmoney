import { useState } from 'react'
import Modal from 'react-modal'
import { Container } from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

function NewTransactionModal({ isOpenModal, onCloseModal} : NewTransactionModalProps) {
 const [selectedTypeEntry, setSelectedTypeEntry] = useState('entrada')

  return (
    <Modal 
      isOpen={isOpenModal} 
      onRequestClose={onCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container> 
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder='Titulo' name="title" id="title" />
        <input 
          type="number"
          placeholder='Valor'
            className={selectedTypeEntry === 'saida' ? 'input-saida' : 'input-entrada'}
            name="amount" id="amount" />
        <div className='react-modal-type'>
          <button 
            type='button' 
            className={selectedTypeEntry === 'entrada' ? 'selected' : ''}
            onClick={() => setSelectedTypeEntry('entrada')}
          >
            Entrada
          </button>
          <button 
            type='button'
            className={selectedTypeEntry === 'saida' ? 'selected' : ''}
            onClick={() => setSelectedTypeEntry('saida')}
          >
            Saida</button>
        </div>
        <input type="text" placeholder='Categoria' name="category" id="category" />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal

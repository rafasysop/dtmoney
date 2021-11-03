import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

Modal.setAppElement('#root')

// Rafael Moura - Ciar nova Transação no Modal
interface NewTransactionModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

function NewTransactionModal({ isOpenModal, onCloseModal} : NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  const { createNewTransaction } = useContext(TransactionsContext)

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
    await createNewTransaction({ title, amount, type, category })

    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')
    
    onCloseModal();

  }

  return (
    <Modal 
      isOpen={isOpenModal} 
      onRequestClose={onCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={handleCreateNewTransaction}> 
        <h2>Cadastrar Transação {type === 'deposit' ? '- de Entrada' : '- de Saida'}</h2>
        <input type="text" 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder='Titulo' name="title" id="title" />
        <input 
          type="number"
          value={amount}
          onChange={(event) => setAmount(+event.target.value)}
          placeholder='Valor'
            className={type === 'withdraw' ? 'input-withdraw' : 'input-deposit'}
            name="amount" id="amount" />
        <div className='react-modal-type'>
          <button 
            type='button' 
            className={type === 'deposit' ? 'selected' : ''}
            onClick={() => setType('deposit')}
          >
            Entrada
          </button>
          <button 
            type='button'
            className={type === 'withdraw' ? 'selected' : ''}
            onClick={() => setType('withdraw')}
          >
            Saida</button>
        </div>
        <input type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder='Categoria' name="category" id="category" />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal

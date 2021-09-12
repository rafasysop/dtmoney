import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal'



function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
  Modal.setAppElement('#root')
  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;

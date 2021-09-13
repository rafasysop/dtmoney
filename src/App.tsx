import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';


function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
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
      <NewTransactionModal 
        isOpenModal={isNewTransactionModalOpen}
        onCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './TransactionsContext';


function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
  
  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpenModal={isNewTransactionModalOpen}
        onCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;

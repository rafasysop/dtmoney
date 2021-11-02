import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionProvider({ children }: TransactionProviderProps) {

  const [transactions , setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
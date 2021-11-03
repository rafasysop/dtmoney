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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {

  const [transactions , setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  async function createNewTransaction(transactionInput: TransactionInput){
    const { data : { transaction }} = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    setTransactions([ ...transactions, transaction ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
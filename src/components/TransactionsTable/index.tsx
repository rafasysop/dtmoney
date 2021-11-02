import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import { api } from '../../services/api'

function TransactionsTable() {

   interface Transaction {
        id: number;
        title: string;
        type: string;
        amount: number;
        category: string;
        createdAt: string;
      }
    

  const [transactions , setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, [])

  console.log('aqui o stado', transactions);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
      {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.amount)}</td>
                  <td>{transaction.category}</td>
                  <td>{ Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                </tr>
              ))}
          
        </tbody>
      </table>
    </Container>
  )
}
export default TransactionsTable

import React, { useEffect, useState } from 'react'

import { Container } from './styles'

import { api } from '../../services/api'

function TransactionsTable() {

  // interface = {

  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/transactions')
      .then(resp => setData(resp.data))
  }, [])

  console.log(data);

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
          
        </tbody>
      </table>
    </Container>
  )
}
// {data && data.map( transaction => (
//             <tr key={transaction.id}>
//             <td>{transaction.title}</td>
//             <td className={transaction.type}>R$ {transaction.amount}</td>
//             <td>{transaction.category}</td>
//             <td>{transaction.createdAt}</td>
//           </tr>
//           ))}
export default TransactionsTable

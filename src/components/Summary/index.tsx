import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const [deposit, setDeposit] = useState(0)
  const [withdraw, setWithdraw] = useState(0)
  const [total, setTotal] = useState(0)

  console.log('Summary', transactions);

  useEffect(() => {
    const depositTransaction = transactions
      .filter(transaction => transaction.type === 'deposit')
      .reduce((a,b) => a + b.amount, 0)
    const withdrawTransaction = transactions
      .filter(transaction => transaction.type === 'withdraw')
      .reduce((a,b) => a + b.amount, 0)
      
    setDeposit(depositTransaction)
    setWithdraw(withdrawTransaction)
    setTotal(depositTransaction - withdrawTransaction)
  }, [transactions])

  console.log('valor de depositos', deposit);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entrada" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(withdraw)}</strong>
      </div>
      <div className={total < 0 ? 'negativo' : ''}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(total)}</strong>
      </div>
    </Container>
  )
}

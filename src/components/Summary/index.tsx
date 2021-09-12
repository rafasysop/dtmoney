import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entrada" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="entrada" />
        </header>
        <strong>- R$ 3000,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entrada" />
        </header>
        <strong>R$ 700,00</strong>
      </div>
    </Container>
  )
}

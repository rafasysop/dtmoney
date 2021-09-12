import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from "miragejs"
import App from './App';

createServer({
  routes() {
    this.namespace = 'api'

    this.get("/transactions", () => [
      { 
        id: "1",
        title: "Site Hamburgueria",
        amount: 400,
        type: 'deposit',
        category: 'Desenvolvimento',
        createdAt: new Date()
      },
      { 
        id: "2",
        title: "Empresa Dev",
        amount: 1600,
        type: 'deposit',
        category: 'Desenvolvimento',
        createdAt: new Date()
      },
      { 
        id: "3",
        title: "Monitor",
        amount: 400,
        type: 'withdraw',
        category: 'Equipamentos',
        createdAt: new Date()
      },
      { 
        id: "4",
        title: "Pagamento Aluguel",
        amount: 700,
        type: 'withdraw',
        category: 'Aluguel',
        createdAt: new Date()
      }
    ])
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

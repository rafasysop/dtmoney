import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs"
import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          amount: 6000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2012-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1300,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2012-02-14 11:00:00'),
        },
        {
          id: 3,
          title: 'Mae depositou',
          amount: 30,
          type: 'deposit',
          category: 'Mae',
          createdAt: new Date('2012-02-15 15:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get("/transactions", () => this.schema.all('transaction'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

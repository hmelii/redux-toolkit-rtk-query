import React from 'react'
import ReceiptItem from './components/ReceiptItem'
import Header from './components/Header'
import User from './components/User'

function App() {
  return (
    <section>
      <Header />
      <User />
      <ReceiptItem
        receipt={{
          id: 1,
          name: 'Лазанья'
        }}
      />
      <ReceiptItem
        receipt={{
          id: 2,
          name: 'Каша'
        }}
      />
      <ReceiptItem
        receipt={{
          id: 3,
          name: 'Паста'
        }}
      />
    </section>
  )
}

export default App

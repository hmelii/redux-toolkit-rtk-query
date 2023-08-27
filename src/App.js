import React from 'react'
import ReceiptItem from './receipt-item'

function App() {
  return (
    <div className="App">
      sdfsdfs
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
    </div>
  )
}

export default App

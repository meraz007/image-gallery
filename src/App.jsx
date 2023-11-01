import './App.css'
import { useState } from 'react'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <div className='bg-gray-100'>
          <div className='container mx-auto max-w-6xl py-10'>
              <Layout />
          </div>
      </div>
    </>
  )
}

export default App

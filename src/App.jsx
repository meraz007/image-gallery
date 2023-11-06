import './App.css'
import { useState } from 'react'
import Layout from './components/Layout'
import Test from './components/Test'

function App() {
  return (
    <>
      <div className='bg-gray-100'>
          <div className='container mx-auto max-w-6xl py-10'>
              <Layout />
              {/* <Test /> */}
          </div>
      </div>
    </>
  )
}

export default App

import './App.css'
import React from 'react';
import Layout from './components/layout/Layout'
import Dashboard from './pagas/Dashboard'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Login from './pagas/Login';

function App() {

  return (
    <>
      <Container>
          <Layout>
            {/* <Dashboard/> */}
            <Routes>
              <Route path='/' element={""}/>
              <Route path='/singin' element={<Login/>}/>
            </Routes>
          </Layout>
      </Container>
    </>
  )
}

export default App

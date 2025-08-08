import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cadastro from './pages/Cadastro'
import Relatorios from './pages/Relatorios'
import Login from './pages/Login'
import Layout from './components/Layout'

function App(){
  const isAuthenticated = !!localStorage.getItem('token') // fake auth flag
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to='/login' />}>
        <Route index element={<Dashboard />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="relatorios" element={<Relatorios />} />
      </Route>
      <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} />} />
    </Routes>
  )
}

export default App

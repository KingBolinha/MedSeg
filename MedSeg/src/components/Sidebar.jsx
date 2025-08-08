import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Dashboard' },
  { to: '/cadastro', label: 'Cadastros' },
  { to: '/relatorios', label: 'Relatórios' }
]

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 border-b">
        <div className="text-2xl font-bold text-indigo-600">SOC</div>
        <div className="text-sm text-gray-500">Sistema Profissional</div>
      </div>
      <nav className="p-4">
        {items.map(i => (
          <NavLink key={i.to} to={i.to} className={({isActive})=> 'block py-2 px-3 rounded ' + (isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50')} end>
            {i.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

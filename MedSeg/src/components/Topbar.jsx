export default function Topbar(){
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">SOC Professional</div>
      <div>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white" onClick={() => { localStorage.removeItem('token'); location.href='/login' }}>Sair</button>
      </div>
    </header>
  )
}

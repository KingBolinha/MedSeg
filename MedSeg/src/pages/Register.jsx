import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex w-[900px] max-w-full">
        
        {/* Lado esquerdo com imagem */}
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532074205216-d0e1f4b87368')" }}>
        </div>

        {/* Lado direito com o formulário */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Criar Conta</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Registrar
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Já tem conta?{' '}
            <Link to="/login" className="text-green-500 hover:underline">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

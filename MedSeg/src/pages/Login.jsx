import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex w-[900px] max-w-full">
        
        {/* Lado esquerdo com imagem */}
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791055366-0d553872125f')",
          }}
        ></div>

        {/* Lado direito com o formulário */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Bem-vindo de volta</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
            >
              Entrar
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Não tem conta?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

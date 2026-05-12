export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white  text-slate-900  px-4">
      <h2 className="text-4xl font-serif font-bold mb-4">Página não encontrada</h2>
      <p className="text-slate-600  mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <a 
        href="/"
        className="bg-secondary hover:bg-yellow-600 text-white  font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
      >
        Voltar para a Home
      </a>
    </div>
  );
}

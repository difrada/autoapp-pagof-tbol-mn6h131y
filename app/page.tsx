import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">PagoFútbol</h1>
      <p className="text-lg mb-8">Simplifica los pagos y la organización de tus partidos de fútbol.</p>
      <a href="/registro" className="bg-blue-500 text-white px-4 py-2 rounded">Registrarse</a>
    </div>
  );
};

export default Home;

// HomePage.tsx
import React from 'react';
import Navbar from '../components/navbar';

interface HomePageProps {
  title: string;
  description?: string;
}

const HomePage: React.FC<HomePageProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-indigo-500 text-white-800">
      <Navbar />
    <div className='justify-center border-2 '>
    </div>
    </div>
  );
};

export default HomePage;

import React from 'react';

interface GenericPageProps {
  title: string;
  onBackClick: () => void;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, onBackClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
ravi.saxena87@gmail.com      <button
        onClick={onBackClick}
        className="self-start mb-8 ml-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-600">This is the {title} page.</p>
    </div>
  );
};

export default GenericPage; 
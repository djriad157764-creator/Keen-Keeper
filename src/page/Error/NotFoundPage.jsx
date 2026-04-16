import React from 'react';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
   const navigate = useNavigate();

   return (
     <div className="min-h-screen w-full max-w-277.5 mx-auto flex items-center justify-center">
       <div className="text-center space-y-6 p-8">
         <div className="text-9xl">🤔</div>
         <h1 className="font-bold text-7xl text-[#244D3F]">404</h1>
         <p className="text-xl text-gray-600">Uh oh! You seem lost...</p>
         <p className="text-gray-500">
           The page you're looking for is playing hide and seek!
         </p>
         <button onClick={() => navigate("/")} className="btn btn-primary">
           Take Me Home
         </button>
       </div>
     </div>
   );
};

export default NotFoundPage;

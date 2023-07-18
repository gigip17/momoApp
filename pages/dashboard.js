// pages/dashboard.js
import React from "react";
import Informtion from "../components/Informtion";

const DashboardPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800">
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800">
        {/* Contenu du tableau de bord ici */}
        <h1 className="text-3xl font-semibold mb-4">Tableau de bord</h1>
        {/* Autres composants et contenu spécifique au tableau de bord */}
        <Informtion />
      </div>
    </div>
  );
};

export default DashboardPage;

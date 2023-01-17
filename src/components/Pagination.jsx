import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-l"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <p className="px-2 py-1">Página {currentPage} de {totalPages}</p>
      <button
        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-r"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Próxima
      </button>
    </div>
  )
}

export default Pagination;

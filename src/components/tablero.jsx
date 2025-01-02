import React from 'react';

const Tablero = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-3">
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
                <div className="w-24 h-24 border border-gray-500"></div>
            </div>
        </div>
    );
};

export default Tablero;

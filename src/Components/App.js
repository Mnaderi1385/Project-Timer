import React from 'react';
import '../app.css';
import Title from './Title';
import Timer from './Timer';

document.body.classList = 'bg-gray-800 selection:bg-red-800 selection:text-white';


const App = () => {
        return (
            <div className="flex justify-center items-center min-h-screen flex-col">
                <Title />
                <Timer />
            </div>
        );
};


export default App;
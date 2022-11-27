import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CareerApp from './components/CareerApp';

// import style
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <CareerApp />
    </BrowserRouter>
);
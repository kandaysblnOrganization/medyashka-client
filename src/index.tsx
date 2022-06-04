import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import "./assets/scss/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App/>);

import React from 'react';
import ReactDOM from 'react-dom';
import Images from './Images';
import Table from './Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from './ContextProvider';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>,
  rootElement
);

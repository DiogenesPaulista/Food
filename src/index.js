import React from 'react';
import ReactDOM from 'react-dom/client';
import Saudacao from "../src/components/saudacao/saudacao.jsx";
import "./style/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
 <Saudacao nome="LUCAS" />
</>
);
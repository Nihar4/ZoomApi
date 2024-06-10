import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create';
import Try from './Try';
import EditStudent from './EditStudent';
import Read from './Read';
import HomeTeacher from './HomeTeacher';
import AdminCreat from './AdminCreat';
import AdmineRead from './AdmineRead';
import Classes from './classes';
import Classgenerate from './classgenerate'; // Add this line to import Classgenerate component
import QcmStudent from './qcmstudent';
import Writetest from './writetest';
import CreateQCM from './CreateQCM';
import CreateQCMAll from './CreateQCMAll'; // Add this line to import CreateQCMAll component
import Login from './login';
import CreateQCMAllAdmine from './CreateQCMAllAdmine';
import Hometechh from './hometechh';
import Meet from './meet'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/homeAdmine" element={<Try />} />                      
                <Route path="/create" element={<Create />} />
                <Route path="/editStudent/:id" element={<EditStudent />} />
                <Route path="/read/:id" element={<Read />} />
                <Route path="/home" element={<Home />} />
                <Route path="/homeTeacher" element={<HomeTeacher />} />
                <Route path="/adminCreat" element={<AdminCreat />} />
                <Route path="/adminCreat" element={<AdminCreat />} />
                <Route path="/classes/:id" element={<Classes />} />
                <Route path="/Classgenerate/:id" element={<Classgenerate />} />
                <Route path="/qcmstudent" element={<QcmStudent />} />
                <Route path="/writetest" element={<Writetest />} />
                <Route path="/createQCM/:id" element={<CreateQCM />} /> 
                <Route path="/createQCMAll/:id" element={<CreateQCMAll />} />
                <Route path="/createQCMAllAdmine" element={<CreateQCMAllAdmine />} />
                <Route path="/hometechh/:id" element={<Hometechh />} />                     
                 <Route path="/login" element={<Login />} />
                 <Route path="/meet/:id" element={<Meet />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

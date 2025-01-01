// import React ,{useState}from 'react';
// import './styles/App.css';
// import FormBuilder from "./components/FormBuilder";
// import FormPreview from "./components/FormPreview";
// import FormResponse from './components/FormResponse';

// function App() {
//   const [questions, setQuestions] = useState([]);
//   return (
//     <div className="App">
//       <h1>Google Forms Clone</h1>
//       <FormBuilder questions={questions} setQuestions={setQuestions} />
//       <FormPreview questions={questions} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./styles/App.css";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormResponse from "./components/FormResponse";
import Navbar from "./components/Navbar";

function App() {
  const [questions, setQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState("create");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <h1> Event Form </h1>
      <Navbar filterItem={handleTabChange} />
      {activeTab === "create" && <FormBuilder questions={questions} setQuestions={setQuestions} />}
      {activeTab === "preview" && <FormPreview questions={questions} />}
      {activeTab === "response" && <FormResponse questions={questions} />}
    </div>
  );
}

export default App;

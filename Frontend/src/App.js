import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/App.css";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormResponse from "./components/FormResponse";
import Navbar from "./components/Navbar";
import Page1 from "./Orgpages/page1";
import Page2 from "./Orgpages/page2";

function GoogleFormPage({ questions, setQuestions }) {
  const [activeTab, setActiveTab] = useState("create");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <h1>Event Form</h1>
      <Navbar filterItem={handleTabChange} />
      {activeTab === "create" && <FormBuilder questions={questions} setQuestions={setQuestions} />}
      {activeTab === "preview" && <FormPreview questions={questions} />}
      {activeTab === "response" && <FormResponse questions={questions} />}
    </div>
  );
}

function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/googleform" element={<GoogleFormPage questions={questions} setQuestions={setQuestions} />} />
      </Routes>
    </Router>
  );
}

export default App;

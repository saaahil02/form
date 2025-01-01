import React, { useState } from "react";
import "../styles/FormResponse.css";

function FormResponse({ questions }) {
  const [responses, setResponses] = useState({});

  const handleChange = (index, value) => {
    setResponses({ ...responses, [index]: value });
  };

  const handleSubmit = () => {
    console.log("Responses Submitted: ", responses);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-response">
      <h2>Submit Your Response</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>
              {q.text} {q.required && <span className="required">*</span>}
            </p>
            {q.type === "text" && (
              <input
                type="text"
                onChange={(e) => handleChange(index, e.target.value)}
                required={q.required}
              />
            )}
            {q.type === "paragraph" && (
              <textarea
                rows={4}
                onChange={(e) => handleChange(index, e.target.value)}
                required={q.required}
              ></textarea>
            )}
            {q.type === "radio" &&
              q.options.map((option, oIndex) => (
                <div key={oIndex}>
                  <input
                    type="radio"
                    id={`${index}-${oIndex}`}
                    name={`question-${index}`}
                    onChange={(e) => handleChange(index, option)}
                  />
                  <label htmlFor={`${index}-${oIndex}`}>{option}</label>
                </div>
              ))}
            {q.type === "checkbox" &&
              q.options.map((option, oIndex) => (
                <div key={oIndex}>
                  <input
                    type="checkbox"
                    id={`${index}-${oIndex}`}
                    name={`question-${index}`}
                    onChange={(e) =>
                      handleChange(index, [
                        ...(responses[index] || []),
                        option,
                      ])
                    }
                  />
                  <label htmlFor={`${index}-${oIndex}`}>{option}</label>
                </div>
              ))}
            {q.type === "file" && (
              <input
                type="file"
                onChange={(e) => handleChange(index, e.target.files[0])}
                required={q.required}
              />
            )}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormResponse;

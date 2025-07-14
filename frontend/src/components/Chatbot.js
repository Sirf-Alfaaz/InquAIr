import React, { useState } from 'react';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);

  const sendQuestion = async () => {
    const response = await fetch('http://localhost:8000/ask/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await response.json();
    setMessages([...messages, { q: question, a: data.answer }]);
    setQuestion('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2>Ask AI</h2>
     <div
  style={{
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden', // 👈 this hides the horizontal scrollbar
    padding: '10px',
    maxWidth: '100%',     // 👈 prevent content from expanding container
    boxSizing: 'border-box'
  }}
>
  {messages.map((msg, idx) => (
    <div key={idx} style={{ marginBottom: '20px', background: '#fff', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <p><strong style={{ color: '#3e5151' }}>Q:</strong> {msg.q}</p>
      <p><strong style={{ color: '#3e5151' }}>A:</strong> {msg.a}</p>
    </div>
  ))}
</div>
      <textarea
        rows="3"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about the PDF..."
      />
      <button onClick={sendQuestion}>Send</button>
    </div>
  );
}

export default Chatbot;



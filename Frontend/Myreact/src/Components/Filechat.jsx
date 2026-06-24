import React, { useState, useEffect, useRef } from 'react';
import './Css/Filechat.css';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../api/axiosInstance';

const FileChat = () => {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) { toast.error('Please select a file before uploading.'); return; }
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);
    try {
      const response = await axiosInstance.post('/Upload_file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFileId(response.data.file_id);
      setMessages([{ sender: 'system', text: `"${file.name}" uploaded. Ask me anything about it!` }]);
      toast.success('File uploaded successfully!');
    } catch (error) {
      console.error(error);
      toast.error('You have reached your daily limit of 10 AI requests. Please try again tomorrow.');
    }
    setLoading(false);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;
    if (!fileId) { toast.error('Please upload a file first.'); return; }

    const userMessage = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await axiosInstance.post('/chat', {
        file_id: fileId,
        messages: [{ role: 'user', content: userInput }],
      });
      const aiMessage = { sender: 'ai', text: response.data.messages.slice(-1)[0].content };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
      if (window.incrementAnswerCount) {
        window.incrementAnswerCount();
      }
    } catch (error) {
      console.error(error);
      setIsTyping(false);
      toast.error('Error getting response from AI.');
    }
    setLoading(false);
  };

  return (
    <div className="fc-page">
      <div className="fc-layout">

        {/* ── Sidebar ── */}
        <aside className="fc-sidebar">
          <div className="fc-sidebar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
              <path d="M3 10h18" /><path d="M8 2v4" /><path d="M16 2v4" />
              <path d="M16 19h6" /><path d="M19 16v6" />
            </svg>
            <span>AskMy<b>Doc</b></span>
          </div>

          <p className="fc-sidebar-label">Document</p>

          {/* Drop zone */}
          <div
            className={`fc-dropzone ${file ? 'fc-dropzone--has-file' : ''}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              disabled={loading}
              style={{ display: 'none' }}
            />
            {file ? (
              <>
                <div className="fc-file-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <p className="fc-file-name">{file.name}</p>
                <p className="fc-file-size">{(file.size / 1024).toFixed(1)} KB</p>
              </>
            ) : (
              <>
                <div className="fc-upload-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <p className="fc-dropzone-hint">Click to select a file</p>
                <p className="fc-dropzone-sub">PDF, DOCX, TXT supported</p>
              </>
            )}
          </div>

          <button
            className="fc-upload-btn"
            onClick={handleFileUpload}
            disabled={loading || !file || !!fileId}
          >
            {fileId ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Ready to chat
              </>
            ) : loading ? 'Uploading...' : 'Analyze Document'}
          </button>

          {fileId && (
            <div className="fc-sidebar-status">
              <span className="fc-status-dot" />
              Document ready
            </div>
          )}
        </aside>

        {/* ── Chat area ── */}
        <main className="fc-main">

          {/* Header */}
          <div className="fc-header">
            <div className="fc-header-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <div>
              <p className="fc-header-name">AskMyDoc AI</p>
              <p className="fc-header-status">{fileId ? 'Document loaded · Ready' : 'Waiting for document'}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="fc-messages" ref={chatBoxRef}>
            {messages.length === 0 && (
              <div className="fc-empty">
                <div className="fc-empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className="fc-empty-title">No messages yet</p>
                <p className="fc-empty-sub">Upload a document and start asking questions</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`fc-msg fc-msg--${msg.sender}`}>
                {msg.sender === 'ai' && (
                  <div className="fc-msg-avatar fc-msg-avatar--ai">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
                    </svg>
                  </div>
                )}
                {msg.sender === 'system' ? (
                  <div className="fc-bubble fc-bubble--system">{msg.text}</div>
                ) : (
                  <div className={`fc-bubble fc-bubble--${msg.sender}`}>{msg.text}</div>
                )}
                {msg.sender === 'user' && (
                  <div className="fc-msg-avatar fc-msg-avatar--user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="fc-msg fc-msg--ai">
                <div className="fc-msg-avatar fc-msg-avatar--ai">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div className="fc-bubble fc-bubble--ai fc-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="fc-input-bar">
            <input
              type="text"
              className="fc-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={fileId ? 'Ask anything about your document...' : 'Upload a document to start chatting'}
              disabled={loading || !fileId}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            />
            <button
              className="fc-send-btn"
              onClick={handleSend}
              disabled={loading || !fileId || !userInput.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default FileChat;
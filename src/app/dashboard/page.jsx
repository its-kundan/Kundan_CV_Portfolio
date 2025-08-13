"use client";
import React, { useState, useEffect } from 'react';
import { FaEye, FaTrash, FaCheck, FaEnvelope, FaClock, FaUser, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlPassword = urlParams.get('password');
    if (urlPassword) {
      setPassword(urlPassword);
      fetchMessages(urlPassword);
    } else {
      setLoading(false); // Show login form if no password in URL
    }
  }, []);

  const fetchMessages = async (pwd) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`/api/messages?password=${pwd}`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
        setIsAuthenticated(true);
      } else {
        setError('Invalid password or unauthorized access');
        setIsAuthenticated(false);
      }
    } catch (error) {
      setError('Failed to fetch messages');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchMessages(password);
  };

  const markAsRead = async (messageId) => {
    // In a real app, you'd update the message status in the database
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, status: 'read' } : msg
    ));
  };

  const deleteMessage = async (messageId) => {
    // In a real app, you'd delete from the database
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessages([]);
    setPassword('');
    setError('');
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'unread' && message.status === 'unread') ||
      (filter === 'read' && message.status === 'read');
    
    return matchesSearch && matchesFilter;
  });

  const unreadCount = messages.filter(msg => msg.status === 'unread').length;

     if (loading) {
     return (
       <div className="min-h-screen bg-gray-900 flex items-center justify-center pt-20">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

     if (!isAuthenticated && !loading) {
     return (
       <div className="min-h-screen bg-gray-900 flex items-center justify-center pt-20">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Portfolio Dashboard</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                placeholder="Enter dashboard password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg"
            >
              Access Dashboard
            </button>
                     </form>
           {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
           <div className="mt-6 text-center">
             <p className="text-gray-400 text-sm">
               Default password: <code className="bg-gray-700 px-2 py-1 rounded">kundan2024</code>
             </p>
             <p className="text-gray-500 text-xs mt-2">
               Change this in your .env.local file
             </p>
           </div>
         </div>
       </div>
     );
  }

     return (
     <div className="min-h-screen bg-gray-900 text-white pt-20">
       {/* Header */}
       <div className="bg-gray-800 border-b border-gray-700 p-6 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">📊 Portfolio Dashboard</h1>
              <p className="text-gray-400 mt-1">Manage your portfolio messages</p>
            </div>
                         <div className="flex items-center gap-6">
               <div className="text-right">
                 <div className="text-2xl font-bold text-blue-400">{messages.length}</div>
                 <div className="text-sm text-gray-400">Total Messages</div>
               </div>
               <button
                 onClick={handleLogout}
                 className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
               >
                 Logout
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'all' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              All ({messages.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'unread' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-4 py-2 rounded-lg ${
                filter === 'read' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Read ({messages.length - unreadCount})
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="grid gap-4">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <FaEnvelope className="text-6xl text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl">No messages found</p>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-750 transition-colors ${
                  message.status === 'unread' ? 'border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FaUser className="text-gray-400" />
                      <span className="font-medium text-blue-400">{message.email}</span>
                      {message.status === 'unread' && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{message.subject}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <FaClock />
                        {new Date(message.timestamp).toLocaleString()}
                      </div>
                      {message.useDigest && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                          Digest Mode
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                      title="View Message"
                    >
                      <FaEye />
                    </button>
                    {message.status === 'unread' && (
                      <button
                        onClick={() => markAsRead(message.id)}
                        className="p-2 bg-green-600 hover:bg-green-700 rounded-lg"
                        title="Mark as Read"
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg"
                      title="Delete Message"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">
                  {message.message.substring(0, 200)}
                  {message.message.length > 200 && '...'}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedMessage.subject}</h2>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm">From:</label>
                  <p className="text-blue-400 font-medium">{selectedMessage.email}</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Date:</label>
                  <p>{new Date(selectedMessage.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Message:</label>
                  <div className="bg-gray-700 p-4 rounded-lg mt-2 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => {
                    markAsRead(selectedMessage.id);
                    setSelectedMessage(null);
                  }}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => {
                    deleteMessage(selectedMessage.id);
                    setSelectedMessage(null);
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

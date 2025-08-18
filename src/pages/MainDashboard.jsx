//  /src/pages/MainDashboard.jsx
// /src/pages/MainDashboard.jsx
// /src/pages/MainDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import * as api from '../api/index.js';
// import { fetchBoards, createBoard } from './api/index.js'; // Your API call
import axios from "axios";
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';

const MainDashboard = ({ user }) => {
    const [boards, setBoards] = useState([]);
    const [newBoardName, setNewBoardName] = useState('');
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
        navigate('/login');
        return;
        }

        const fetchBoards = async () => {
        try {
             const { data } = await api.fetchBoards();
            // const { data } = await fetchBoards();
            setBoards(data);
        } catch (error) {
            toast.error("Failed to fetch boards.");
            console.error(error);
        } finally {
            setLoading(false);
        }
        };

        fetchBoards();
    }, [user, navigate]);

    // ... rest stays the same
    /*
    const baseURL = import.meta.env.VITE_API_BASE_LOCAL.replace(/\/$/, '');
        try {
          const res = await axios.post(`${baseURL}/auth/login`, {
          const res = await axios.post(`${baseURL}/boards`, {
            email: form.email,
            password: form.password
            }, {
            withCredentials: true
          });
           console.log("LoggedIn:", res.data);
          navigate("/");
        }
    */


    const handleCreateBoard = async (e) => {
        e.preventDefault();
        if (!newBoardName.trim()) {
            return toast.error("Board name cannot be empty.");
        }

        setIsCreating(true);
        const baseURL = import.meta.env.VITE_API_BASE_LOCAL.replace(/\/$/, '');
        try {
            // const { data } = await api.createBoard({ name: newBoardName });
            const { data } = await axios.post(`${baseURL}/boards`, { 
                    name: newBoardName 
                }, {
                    withCredentials: true
                }
            );
            setBoards(prev => [...prev, data]);
            setNewBoardName('');
            toast.success(`Board "${data.name}" created!`);
            console.log(`Board "${data.name}" created!`);
        } catch (error) {
            toast.error("Failed to create board.");
            console.error(error);
        } finally {
            setIsCreating(false);
        }
    };

    if (loading) return <Spinner />;

    return (
        <div className="app">
            <h1 className="header">📝 Trello Clone</h1>
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome, {user?.name || 'User'} 👋
            </h1>

            <form onSubmit={handleCreateBoard} className="mb-8 p-4 bg-gray-100 rounded-lg flex gap-4">
                <input
                    type="text"
                    value={newBoardName}
                    onChange={(e) => setNewBoardName(e.target.value)}
                    placeholder="Enter new board name..."
                    className="flex-grow p-2 border border-gray-300 rounded-md"
                    disabled={isCreating}
                />
                <button 
                    type="submit" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
                    disabled={isCreating}
                >
                    {isCreating ? 'Creating...' : 'Create Board'}
                </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {boards.length > 0 ? (
                    boards.map(board => (
                        <Link key={board._id} to={`/board/${board._id}`}>
                            <div className="h-28 bg-indigo-500 text-white font-bold p-4 rounded-md shadow-lg hover:bg-indigo-600 transition-transform transform hover:-translate-y-1">
                                {board.name}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500">You don't have any boards yet. Create one to get started!</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default MainDashboard;










/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';

const MainDashboard = () => {
    const [boards, setBoards] = useState([]);
    const [newBoardName, setNewBoardName] = useState('');
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const getBoards = async () => {
            try {
                const { data } = await api.fetchBoards();
                setBoards(data);
            } catch (error) {
                toast.error("Failed to fetch boards.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getBoards();
    }, []);

    const handleCreateBoard = async (e) => {
        e.preventDefault();
        if (!newBoardName.trim()) {
            return toast.error("Board name cannot be empty.");
        }
        setIsCreating(true);
        try {
            const { data } = await api.createBoard({ name: newBoardName });
            setBoards([...boards, data]);
            setNewBoardName('');
            toast.success(`Board "${data.name}" created!`);
        } catch (error) {
            toast.error("Failed to create board.");
            console.error(error);
        } finally {
            setIsCreating(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Boards</h1>
            
         
            <form onSubmit={handleCreateBoard} className="mb-8 p-4 bg-gray-100 rounded-lg flex gap-4">
                <input
                    type="text"
                    value={newBoardName}
                    onChange={(e) => setNewBoardName(e.target.value)}
                    placeholder="Enter new board name..."
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={isCreating}
                />
                <button 
                    type="submit" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
                    disabled={isCreating}
                >
                    {isCreating ? 'Creating...' : 'Create Board'}
                </button>
            </form>

     
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {boards.length > 0 ? (
                    boards.map(board => (
                        <Link key={board._id} to={`/board/${board._id}`}>
                            <div className="h-28 bg-indigo-500 text-white font-bold p-4 rounded-md shadow-lg hover:bg-indigo-600 transition-transform transform hover:-translate-y-1">
                                {board.name}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500">You don't have any boards yet. Create one to get started!</p>
                )}
            </div>
        </div>
    );
};

export default MainDashboard;
*/


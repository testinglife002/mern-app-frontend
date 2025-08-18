// /src/components/board/CreateList.jsx
import React, { useState } from 'react';
import * as api from '../../api/index.js';
import toast from 'react-hot-toast';

const CreateList = ({ boardId, onListCreated }) => {
    const [listName, setListName] = useState('');
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateList = async (e) => {
        e.preventDefault();
        if (!listName.trim()) return;

        setIsCreating(true);
        try {
            const { data } = await api.createList({ name: listName, boardId });
            toast.success(`List "${data.name}" created`);
            onListCreated(data); // Pass the new list data up to the parent
            setListName('');
        } catch (error) {
            toast.error('Failed to create list.');
            console.error(error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <div className="flex-shrink-0 w-72">
            <div className="p-2 bg-gray-200 rounded-lg">
                <form onSubmit={handleCreateList}>
                    <input
                        type="text"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        placeholder="+ Add another list"
                        className="w-full p-2 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white bg-gray-200 placeholder-gray-600"
                        disabled={isCreating}
                    />
                </form>
            </div>
        </div>
    );
};

export default CreateList;


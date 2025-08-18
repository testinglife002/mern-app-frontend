// /src/pages/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-80px)]">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                Organize it all with TrelloClone
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with TrelloClone.
            </p>
            <div>
                <Link
                    to="/register"
                    className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                    Get Started - It's Free!
                </Link>
            </div>
        </div>
    );
};

export default Landing;


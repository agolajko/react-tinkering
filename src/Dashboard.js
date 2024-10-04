// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

export default function Dashboard() {
    const [data, setData] = useState(null);
    const { token, logout } = useAuth();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('/api/protected', {
                    headers: { Authorization: token }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                if (error.response && error.response.status === 401) {
                    logout(); // Token expired or invalid
                }
            }
        };

        fetchDashboardData();
    }, [token, logout]);

    console.log(data);
    // Render dashboard with data
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard: Protected route</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>



            {/* <p>{data}</p> */}
        </div>
    );
}
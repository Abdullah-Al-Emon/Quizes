import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData();
    const data = quiz.data;
    return (
        <div>
            <h2 className='font-semibold mt-5 text-blue-400 text-2xl'>This Quiz Total</h2>
            <div className='lg:mx-56 lg:block hidden mt-8 mb-10'>
            <LineChart
                    className='chart'
                    width={700}
                    height={500}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                
            </div >
            <div className='md:mx-28 md:block  lg:hidden hidden mt-8 mb-10'>
            <LineChart
                    className='chart'
                    width={500}
                    height={400}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                
            </div >
            <div className=' md:hidden mt-5 mb-10'>
            <LineChart
                    className='chart'
                    width={300}
                    height={200}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                
            </div >
        </div>
    );
};

export default Statistics;
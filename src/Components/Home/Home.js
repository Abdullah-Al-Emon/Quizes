import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    const cards = useLoaderData().data
    return (
        <div>
            <TopSection></TopSection>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
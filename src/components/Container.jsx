import React from 'react';
import './Container.css';
import TopSection from './TopSection';
import MainSection from './MainSection';
const Container = () => {
  return (
    <div className='container'>
      <TopSection/>
      <MainSection/>
    </div>
  )
}

export default Container

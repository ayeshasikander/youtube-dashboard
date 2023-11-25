import React from 'react';
import './MainSection.css';
import Card from './Card';
const MainSection = () => {
    return (
        <div className='main-section'>
            <div className="left-panel">
                <div className="banner">
                    <div class="face">
                        <p class="v-index">II
                        </p>
                        <p class="h-index">II
                        </p>
                        <div class="hand">
                            <div class="hand">
                                <div class="hour"></div>
                                <div class="minute"></div>
                                <div class="second"></div>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <h1>New Thynk YT Studio</h1>
                        <p>In the vast expanse of pixels,<br />YT transforms whispers into echoes.</p>

                        <div className="btnn">
                            <span>Upload by: Alexander</span>
                            <button><a href="/"> Get Started</a></button>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="filters">
                        <div className="popular">
                            <h2>Feed</h2>
                            <button className="button1"><a href="/"> Popular</a></button>
                        </div>
                        <div className="filter-buttons">
                            {/* <button className="button-sort"><a href="/">Music</a></button> */}
                            <button className="button-sort"><a href="/">Trending</a></button>
                            <button className="button-sort"><a href="/">Sports</a></button>
                            <button className="button-sort"><a href="/">Gaming</a></button>
                            <button className="button-sort"><a href="/">Live</a></button>
                        </div>
                    </div>
                    <main>
                        <Card/>
                    </main>
                </div>

            </div>
            <div className="right-panel"></div>
        </div>
    )
}

export default MainSection

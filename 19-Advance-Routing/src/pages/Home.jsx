import React from 'react';

const Home = () => {
  return (
    <main className="home-body">
      <header className="home-header">
        <p className="home-kicker">Hello, I am</p>
        <h1>Sumit Kumar</h1>
        <h2>Web Developer &amp; React Learner</h2>
        <p className="home-intro">
          I build clean, responsive websites while learning modern React,
          one thoughtful project at a time.
        </p>
        <div className="home-skills" aria-label="Skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>
      </header>

      <section className="coming-soon" aria-label="Portfolio status">
        <p className="coming-label">Portfolio in progress</p>
        <h3 className="reflection-text" data-text="Coming soon">
          Coming soon
        </h3>
        <p className="coming-copy">New work is taking shape.</p>
      </section>
    </main>
  );
};

export default Home;
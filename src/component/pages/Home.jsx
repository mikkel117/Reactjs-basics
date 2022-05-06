import React from "react";

function Home() {
  return (
    <section className='home'>
      <h1>React hooks basics</h1>
      <div className='home-content'>
        <h2>hvad skal du installer?</h2>
        <p>for hver af dem her skal du skrive "npm i" foran</p>
        <ul>
          <li>
            <span> sass:</span> <code> node-sass --save</code>
          </li>
          <li>
            <span> nav:</span> <code> react-router-dom</code>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;

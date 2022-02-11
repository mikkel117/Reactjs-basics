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
          <li className='Tooltip'>
            <span> nav:</span> <code> react-router-dom</code>
            <span class='tooltiptext'>
              hvis du ville kunne følge det her skal du bruge vasionar under 6
              det gør du ved at sette "@5.2.0" baved. <br /> 5.2.0 er den jeg
              selv bruger
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;

import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    const stockChartScript = document.createElement("script");
    stockChartScript.src = "https://localhost:7000/bundle.js";
    stockChartScript.async = true;
    document.body.appendChild(stockChartScript);
  }

  render() {
    return (
      <div id="app">
        Hello World
      </div>
    )
  }
}

export default App;
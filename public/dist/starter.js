
const stockChartScript = document.createElement("script");
stockChartScript.src = "http://localhost:7000/bundle";
stockChartScript.async = true;
document.body.appendChild(stockChartScript);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('stock-chart')
);


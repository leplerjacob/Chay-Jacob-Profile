import "./App.scss";

function App() {
  // function that targets body and adds an dataset attribute.
  // The attribute will be either 'light' or 'dark'

  // This is another change
  // Hi Chay :) :)

  const setTheme = () => {
    let dataThemeAttribute = "data-theme";
    const body = document.body;
    let newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return <div className="App">Testing scss and js functionality
  
    <button onClick={setTheme}>Click to change theme</button>
  </div>;
}

export default App;

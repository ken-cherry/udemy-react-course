// import Navbar from "./tutorial/04-project-structure/starter/Navbar";
// import Home from "./tutorial/04-project-structure/starter/Pages/Home";
// import About from "./tutorial/04-project-structure/starter/Pages/About";
// import { Home, About } from "./tutorial/04-project-structure/starter/Pages";

import Example from "./tutorial/04-project-structure/starter/Example.jsx";

import List from "./tutorial/05-leverage-javascript/starter/List.jsx";

// function App() {
//   return (
//     <div className="container">
//       <Home />
//       <About />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div className="container">
      {/* <Example /> */}
      <div>
        <h2>Leverage Javascript</h2>
        <List />
      </div>
    </div>
  );
};
export default App;

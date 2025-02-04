import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import SinglePokemon from "./pages/SinglePokemon";

const App: React.FC = () => (
  <div className="bg-gradient-to-br from-slate-500 to-white-500 min-h-screen">

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SinglePokemon />} />
      <Route path="/squad" element={<Squad />} />
    </Routes>
  </BrowserRouter>
  </div>
);

export default App;

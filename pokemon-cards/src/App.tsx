import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Squad from "./pages/Squad";
import SinglePokemon from "./pages/Card";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SinglePokemon />} />
      <Route path="/squad" element={<Squad />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

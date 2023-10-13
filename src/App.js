import { ToastContainer } from "react-toastify";
import { Header } from "./components/header/Header";
import RoutesApp from "./routes/RoutesApp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <Header />
      <RoutesApp />
    </div>
  );
}

export default App;

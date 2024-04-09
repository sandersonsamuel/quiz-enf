import Rota from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <div className="purpleGradient w-screen h-screen px-5 overflow-x-hidden">
      <BrowserRouter>
        <Rota/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;

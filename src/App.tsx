

import AppRoutes from "./Routes/AppRoutes";
// import { useScrollToTop } from "./Hooks/use-scroll-to-top";
import "./global.css";
import { ColorProvider } from './Components/Layout/Settings/ColorContext';



function App() {
  return (
    <ColorProvider>
     
      <AppRoutes />

    </ColorProvider>
  );
}

export default App;

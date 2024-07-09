import AppRoutes from "./Routes/AppRoutes"
import { useScrollToTop } from "./Hooks/use-scroll-to-top";
import './global.css'

const App: React.FC = () => {
  useScrollToTop();

  return (
   <>
   <AppRoutes/>
   </>
  )
}

export default App
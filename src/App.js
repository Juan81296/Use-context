import Hijo from "./components/Hijo";
import { UserProvider } from "./components/UserProvider";


function App() {

  return (
    <UserProvider>
    <div>
      <Hijo />
    </div>
    </UserProvider>
  );
}

export default App;

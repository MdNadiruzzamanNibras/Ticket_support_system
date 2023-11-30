import Mainlayout from "./layout/Mainlayout";
  import { ToastContainer  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Mainlayout />
      <ToastContainer/>
    </div>
  );
};

export default App;
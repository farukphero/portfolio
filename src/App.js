import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="bg-gradient-to-r from-warning to-success text-white">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

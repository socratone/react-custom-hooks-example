import { Routes, Route } from 'react-router-dom';
import UseGet from './pages/UseGet';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/use_get">UseGet</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/use_get" element={<UseGet />} />
        <Route path="*" element={<UseGet />} />
      </Routes>
    </div>
  );
}

export default App;

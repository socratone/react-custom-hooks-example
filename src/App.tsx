import { Routes, Route } from 'react-router-dom';
import Get from './pages/Get';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/get">Get</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/get" element={<Get />} />
        <Route path="*" element={<Get />} />
      </Routes>
    </div>
  );
}

export default App;

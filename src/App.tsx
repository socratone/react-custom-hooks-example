import { Routes, Route } from 'react-router-dom';
import UseGet from './pages/UseGet';
import MainNav from './components/layout/MainNav';
import MainNavItem from './components/layout/MainNavItem';
import UseInput from './pages/UseInput';

function App() {
  return (
    <div>
      <MainNav>
        <MainNavItem to="/use_get">UseGet</MainNavItem>
        <MainNavItem to="/use_input">UseInput</MainNavItem>
      </MainNav>
      <Routes>
        <Route path="/use_get" element={<UseGet />} />
        <Route path="/use_input" element={<UseInput />} />
        <Route path="*" element={<UseInput />} />
      </Routes>
    </div>
  );
}

export default App;

import { AppBar, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import RemotePage from './pages/RemotePage';
import Navigation from './components/Navigation';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import LogsViewerPage from './pages/LogsViewerPage';

function App() {
  return (
    <Box className="page-main">
      <Box className="page-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/logs" element={<LogsViewerPage />} />
          <Route path="/remote" element={<RemotePage />} />
        </Routes>
      </Box>
      <AppBar>
        <Navigation />
      </AppBar>
    </Box>
  );
}
export default App;

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { SettingsRemote, ShowChart } from '@mui/icons-material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleChange = (_event: unknown, newValue: string) => {
    navigate(newValue);
  };
  return (
    <BottomNavigation showLabels value={useLocation().pathname} onChange={handleChange}>
      <BottomNavigationAction label="dashboard" value="/" icon={<ShowChart />} />
      <BottomNavigationAction label="logs" value="/logs" icon={<AnalyticsIcon />} />
      <BottomNavigationAction label="remote" value="/remote" icon={<SettingsRemote />} />
    </BottomNavigation>
  );
}

export default Navigation;

import { Box } from '@mui/material';
import DataGrid from '../components/DataGrid';
import { getPowerDataRow, getServiceStatus, getTempRows } from '../store/getDataGrids';

function DashboardPage() {
  return (
    <Box>
      <h2>power</h2>
      <DataGrid rows={getPowerDataRow()} />
      <h2>temps</h2>
      <DataGrid rows={getTempRows()} />
      <h2>services</h2>
      <DataGrid rows={getServiceStatus()} />
    </Box>
  );
}
export default DashboardPage;

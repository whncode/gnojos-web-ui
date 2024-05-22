import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataRowGrid } from '../types/DataGridRow';

export type DataGridProps = {
  rows: DataRowGrid[];
};

export default function DataGrid({ rows }: DataGridProps) {
  const isMaxMinColumns = rows?.some((row) => row.max || row.min);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>key</TableCell>
            <TableCell align="right">value</TableCell>
            {isMaxMinColumns && (
              <>
                <TableCell align="right">max (24h)</TableCell>
                <TableCell align="right">min (24h)</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
              {isMaxMinColumns && (
                <>
                  <TableCell align="right">{row.min}</TableCell>
                  <TableCell align="right">{row.max}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

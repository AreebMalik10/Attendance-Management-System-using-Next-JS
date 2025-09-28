import React from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Checkbox, IconButton, TablePagination, Box, TextField, Button
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TableComponent({
  tableHeads = [],
  data = [],
  onRowAction,
  rowsPerPageOptions = [10, 25, 50],
  actions = [],
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
  const [selected, setSelected] = React.useState([]);
  const [search, setSearch] = React.useState('');

  // Filter data by search
  const filteredData = data.filter(row =>
    tableHeads.some(head =>
      (row[head.key] || '').toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Pagination
  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(paginatedData.map((row, idx) => idx));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (idx) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ p: 2 }}>
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ width: 250 }}
        />
        <Button variant="outlined" size="small">Filter</Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="small">Export attendance</Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeads.map((head, idx) => (
                <TableCell key={idx} sx={{ fontWeight: 600 }}>
                  {head.label}
                </TableCell>
              ))}
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, idx) => (
              <TableRow key={idx} hover>
                {tableHeads.map((head, colIdx) => (
                  <TableCell key={colIdx}>
                    {row[head.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={tableHeads.length + 2} align="center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
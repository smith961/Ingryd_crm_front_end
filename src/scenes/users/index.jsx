import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'role', headerName: 'Role' },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
  // Add more users here
];

return (
  <DataGrid
    columns={columns}
    rows={rows}
    pageSize={10}
    rowsPerPageOptions={[10, 20, 50]}
    checkboxSelection
  />
);
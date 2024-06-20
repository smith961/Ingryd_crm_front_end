import { Box, useTheme } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../../data/productAPI';
import Header from '../../components/Header';
import { tokens } from "../../theme";
import { useState } from 'react';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product', width: 130 },
    { field: 'description', headerName: 'Product Description', width: 130 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 90,
    },
    {
        field: 'category',
        headerName: 'Category',
        // description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 160,
        // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'price',
        headerName: 'Price per Item',
        type: 'number',
        width: 90,
    },
  ];

  

export default function DataTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems='center'>
        <Header title="INVENTORY" subtitle="Welcome to your inventory" />
        </Box>
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ maxWidth: "lg" }}
        >
        <Box
        gridColumn="2 /span 10"
        grid
        display="flex"
        
        >
            <DataGrid
            rows={data}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
                border: '1px solid #fff',
                borderColor: '#fff',
                '& .MuiDataGrid-cell': {
                  borderColor: '#fff',
                  color: `${colors.greenAccent[500]}`,
                },
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            />
        </Box>
        </Box>
      </Box>
    );
  }

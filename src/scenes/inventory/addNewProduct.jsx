import { useState } from 'react';
import { TextField, Button, Grid, Box, Select, MenuItem, useTheme } from '@mui/material';
import categories from '../../data/categoryAPI';
import Header from '../../components/Header';
import { tokens } from "../../theme";


const AddNewProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the product to the database or API here
  };

  return (
   <Box m="15px">
    <Box display="flex" justifyContent="space-between" alignItems='center'>
        <Header title="INVENTORY" subtitle="Add new products your inventory" />
    </Box>
    <Box sx={{ maxWidth: 'lg' }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                label="Product Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
                sx={{ width: 400 }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Product Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                fullWidth
                sx={{ width: 400 }}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                label="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                fullWidth
                sx={{ width: 400 }}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                label="Quantity"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                type="number"
                fullWidth
                sx={{ width: 400 }}
            />
            </Grid>
            <Grid item xs={12}>
            <Select
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            fullWidth
            sx={{ width: 400 }}
            defaultValue={categories[0].id}
            >
            {categories.map((category) => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
            ))}
            </Select>
        </Grid>
            <Grid item xs={12}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                sx={{
                    backgroundColor: `${colors.pinkAccent[500]}`,
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: 400,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: `${colors.pinkAccent[700]}`,
                      
                    },
                  }}
            >
                Add Product
            </Button>
            </Grid>
        </Grid>
        </Box>
    </Box>
  );
};

export default AddNewProduct;

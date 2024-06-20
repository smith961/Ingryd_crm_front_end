// // import { Box, Typography, Grid, Avatar } from '@mui/material';
// import { Box, Button, IconButton, Typography, useTheme,Avatar} from "@mui/material";
// import { tokens } from "../../theme";
// import Header from "../../components/Header.jsx";
// import StatBox from "../../components/StatBox.jsx";

// const ProfilePage = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//         <Box m="20px">
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Header title="PROFILE" subtitle="Welcome to your profile" />
//         </Box>
//             <Box
//             display="grid"
//             gridTemplateColumns="repeat(12, 1fr)"
//             gridAutoRows="140px"
//             gap="20px">
//                 <Box
//                 gridColumn="span 4"
//                 backgroundColor={colors.primary[400]}
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center">
//                     <Avatar
//                         src={<img src="../../assets/logo.png" alt="profile picture" />}
//                         sx={{ width: 100, height: 100 }}
//                     />

//                 </Box>
//                 <Box>
//                     <Typography variant="h4">User Profile</Typography>
//                     <Typography variant="body1">Username: <strong>johnDoe</strong></Typography>
//                     <Typography variant="body1">Email: <strong>johndoe@example.com</strong></Typography>
//                     <Typography variant="body1">Bio: <strong>This is a short bio about the user.</strong></Typography>

//                 </Box>

//             </Box>
//             {/* <Grid container spacing={2}>
//             <Grid item xs={12} md={4}>
//             </Grid>
//             <Grid item xs={12} md={8}>
//             </Grid>
//         </Grid> */}
//         </Box>
//     );
// };

// export default ProfilePage;

import { Box, Typography, Avatar, TextField, Button, useTheme } from '@mui/material';
import Header from "../../components/Header.jsx";
import { tokens } from "../../theme";
import { useState } from 'react';
const ProfilePage = () => {
  const [username, setUsername] = useState('johnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('This is a short bio about the user.');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleEdit = () => {
    // Call an API or perform some logic to save the changes
  };

  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
           <Header title="PROFILE" subtitle="Welcome to your profile" />
       </Box>
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
        sx={{ maxWidth: "lg" }}
        >
      <Box gridColumn="span 4">
        <Avatar src={<img src="../../assets/logo.png" alt="profile picture" />} sx={{ width: 100, height: 100 }} />
      </Box>
      <Box 
      gridColumn="span 8"
      display="flex"
      flexDirection="column">
        <Typography variant="h3" sx={{ marginBottom: '16px' }}>User Profile</Typography>
        <TextField
          sx={{ marginBottom: '16px' }}
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={{ marginBottom: '16px' }}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ marginBottom: '16px' }}
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button 
        variant="contained" 
        color="primary" 
        sx={{
            backgroundColor: `${colors.pinkAccent[500]}`,
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: `${colors.pinkAccent[700]}`,
              
            },
          }}
        onClick={handleEdit}>
          Save Changes
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default ProfilePage;
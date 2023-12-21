// MyLoginPage.js
import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MyLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = useLogin();
    const notify = useNotify();

    const handleLogin = () => {
        login({ username, password })
            .catch(() => notify('Invalid credentials'));
    };

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ height: '100vh' }}
            >
                <Card>
                    <CardHeader
                        title={<Typography variant="h4">Login</Typography>}
                        avatar={<LockIcon fontSize="large" />}
                        style={{ textAlign: 'center' }}
                    />
                    <CardContent>
                        <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </CardActions>
                    <Notification />
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

export default MyLoginPage;

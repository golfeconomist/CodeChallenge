import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';

const preventDefault = (event) => event.preventDefault();

export default () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                ml: 2,
                },
            }}
            onClick={preventDefault}
            style={{ marginTop: 30, marginBottom: 30 }}
        >
        <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/')}
            underline={location.pathname === '/' ? 'always' : 'none'}
            style={{ fontSize: 22 }}
        >
            Images
        </Link>
        <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/table')}
            underline={location.pathname === '/table' ? 'always' : 'none'}
            style={{ fontSize: 22 }}
        >
            Table
        </Link>
    </Box>
  );
}
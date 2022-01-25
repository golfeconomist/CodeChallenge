import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default () => {
    return (
        <Container>
            <Typography variant="h4" component="h4" style={{ margin: 'auto', width: 'fit-content', maxWidth: '80%', marginTop: 200 }}>
                There was an error loading this page. Try again later.
            </Typography>
        </Container>
    )
}

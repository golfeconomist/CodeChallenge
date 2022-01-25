import React, { useEffect, useState, useContext } from 'react';
import Nav from './components/Nav';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from './components/Card';
import { Context } from './ContextProvider';
import { getCharacters } from './utils';
import PageLoadError from './components/PageLoadError';


export default () => {
    const context = useContext(Context);
    const [pageLoadError, setPageLoadError] = useState(false);

    useEffect(() => {
        if(context.characters.length === 0){
            getPageData();
        }
    }, []);

    const getPageData = async () => {
        try{
            const data = await getCharacters();
            context.setCharacters(data);
        }catch(e){
            setPageLoadError(true);
        }
    }

    return (
        pageLoadError ? <PageLoadError /> :
        <Container>
            <Nav />
            <Grid container spacing={2}>
                {
                    context.characters.map((character) => {
                        return (
                            <Grid
                                lg={4}
                                md={6}
                                sm={12}
                                key={character.id}
                                container
                                direction="row"
                                justifyContent="center"
                            >
                                <Card
                                    image={character.imageUrl}
                                    fullName={character.fullName}
                                    title={character.title}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

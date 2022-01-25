import React, { useEffect, useState, useContext } from 'react';
import Nav from './components/Nav';
import MaterialTable, { Column } from "@material-table/core";
import Container from '@mui/material/Container';
import PageLoadError from './components/PageLoadError';

import { Context } from './ContextProvider';
import { getCharacters } from './utils';

const lookup = { true: "Available", false: "Unavailable" };

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

    const columns = [
        { title: "ID", field: "id" },
        { title: "Full Name", field: "fullName" },
        { title: "Title", field: "title" },
        { title: "Family", field: "family" }
    ];
    
    return (
        pageLoadError ? <PageLoadError /> :
        <Container>
            <Nav />
            <MaterialTable title={'Characters'} columns={columns} data={context.characters} />
        </Container>
    )
}
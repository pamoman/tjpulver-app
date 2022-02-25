/* 
 * Products
 */

import React from "react";
import { initializeApollo, addApolloState } from '@config/client';
import { useQuery } from '@apollo/client';
import { Page } from '@components/Global';
import { PamoBlockController } from '@components/Blocks';
import { Typography } from '@mui/material';

const Produkter = () => {
    const attributes = {};

    return (
        <Page {...attributes} />
    )
};

export const getStaticProps = async (ctx) => {
    const apolloClient = initializeApollo();

    /* await apolloClient.query({ query: START }); */
  
    return addApolloState(apolloClient, {
        props: {},
        revalidate: 60,
    });
};

export default Produkter;
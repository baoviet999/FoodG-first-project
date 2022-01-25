import { Box, Container, Grid } from '@material-ui/core';
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Product from '../../../components/Product';
import { GridContext } from '../GridContext';

import './productList.scss';
ProductList.propTypes = {
    foodList : PropTypes.array
};

function ProductList({ foodList, loading, type }) {
    const grid = useContext(GridContext)
    if (loading) {
        return (
            <Container className="food-product__progress-wrapper">
                <div className="food-product__progress">
                    <CircularProgress color="secondary" />
                </div>
            </Container>
        );
    }
    return (
        <Box>
            <Grid container spacing={2}>
                {foodList.map((food, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={grid.grid}>
                        <Product food={food} type={type} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
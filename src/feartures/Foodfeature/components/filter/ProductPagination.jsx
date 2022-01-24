import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from "@material-ui/lab/Pagination";
import foodApi from '../../../../Api/foodApi';
ProductPagination.propTypes = {
    onChange : PropTypes.func,
};

function ProductPagination({ onChange }) {
    
    useEffect(() => {
        const fetchPagination = async () => {
            const response = await foodApi.getAll('pagination')
        }
        fetchPagination()
    },[])
    const handleChange = (e, value) => {
        console.log(value);
        if (onChange) {
            onChange(value)
        }
    }
    return <Pagination count={4} variant="outlined" shape="rounded" onChange={handleChange }/>;
}

export default ProductPagination;
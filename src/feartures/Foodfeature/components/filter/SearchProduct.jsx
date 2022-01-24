import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from "@material-ui/icons/Search";
import './SearchProduct.scss'
SearchProduct.propTypes = {
    
};

function SearchProduct({ onSearch }) {
    const [value, setValue] = useState("");
    const handleChange = (value) => {
        console.log(value);
        setValue(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSearch) return;
        onSearch(value)
        setValue('')
    };
    return (
        <form className="search-product__input-wrap" onSubmit={handleSubmit}>
            <input placeholder='Search your food' type="text" value={value} onChange={(e) => handleChange(e.target.value)} />
            <div className="search-product__input-icon" onClick={handleSubmit}>
                <SearchIcon />
            </div>
        </form>
    );
}

export default SearchProduct;
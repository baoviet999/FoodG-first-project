import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import "./PriceFilter.scss";
PriceFilter.propTypes = {};

const priceOptions = [
    { title: "All price", price: { price_lte: 1000, price_gte: 0 } },
    { title: "Under $100", price: { price_lte: 100, price_gte: 0 } },
    { title: "$50 to $100", price: { price_gte: 50, price_lte: 100 } },
    { title: "Under $50", price: { price_lte: 50, price_gte: 0 } },
    { title: "Above $100", price: { price_gte: 100, price_lte: 1000 } },
];
function PriceFilter({onClickPrice = null}) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        if (!onClickPrice) return;
        onClickPrice(event.target.name)
        setValue(event.target.value);
    };
    return (
        <div className="price-filter__wrapper">
            <FormControl component="fieldset">
                <RadioGroup name="price" value={value} onChange={handleChange}>
                    {priceOptions.map(({ title, price }, index) => (
                        <FormControlLabel
                            key={index}
                            value={title}
                            name={`${price.price_lte}+${price.price_gte}`}
                            control={<Radio />}
                            label={title}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default PriceFilter;

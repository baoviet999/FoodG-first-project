import React from 'react';
import PropTypes from 'prop-types';
import "./DescriptionTab.scss"
DescriptionTab.propTypes = {
    
};
const detailTableData = [
    {
        title: "Best Foods",
        description: "28 cm size",
        ingredients: "Ingredients",
    },
    {
        title: "24",
        description: "28 cm size",
        ingredients: "Egg",
    },
    {
        title: "728",
        description: "Energy",
        ingredients: "Milk Protein",
    },
    {
        title: "1054",
        description: "Calo",
        ingredients: "Sesame",
    },
    {
        title: "68",
        description: "Fat",
        ingredients: "Lactose",
    },
    {
        title: "25",
        description: "Gluxit",
        ingredients: "Gluten",
    },
    {
        title: "548",
        description: "Protein",
        ingredients: "Mustard",
    },
];
function DescriptionTab(props) {
    return (
        <div className="description">
            <div className="description__title">
                <p>
                    Although the legendary Double Burger really needs no introduction, please allow us… Tucked
                    in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion,
                    pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
                    crowning touch. Oh baby!
                </p>
            </div>
            <div className="description__detail">
                {detailTableData.map(({ title, description, ingredients }, index) => (
                    <div key={index} className="description__detail-item">
                        <div className="description__detail-item-title">
                            <strong>{title}</strong>
                            <span>{description}</span>
                        </div>
                        <div className="description__detail-item-ingredients">
                            {ingredients}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DescriptionTab;
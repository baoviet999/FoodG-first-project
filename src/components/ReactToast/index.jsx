import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

ReactToas.propTypes = {};

function ReactToas(props) {
    const notiffy = () => {
        toast.success("You can provide any string", {
            icon: "🚀",
            theme: 'dark',
            
        });
    };
    return (
        <div>
            <button onClick={notiffy}>Notify</button>
        </div>
    );
}

export default ReactToas;

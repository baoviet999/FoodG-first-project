import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    button: {
        backgroundColor: "red",
        borderRadius: "10",
        transition: "0.5s ease-in-out",
        margin: "20px",

        color: "#fff",
        "&:hover": {
            backgroundColor: "blue",
        },
    },
    typography: {
        color: 'red',
        fontSize: '20px',
        fontFamily : 'Arial'
    }
}));
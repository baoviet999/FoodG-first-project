import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
Test.propTypes = {};

function Test(props) {
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: orange[500],
            },
        },
    });
    return (
        <Container maxWidth="sm" style={{ backgroundColor: "red" }}>
            <ThemeProvider theme={theme}>
                <div>
                    <Button color="primary" className={classes.button}>
                        Click me
                    </Button>
                    <Typography variant="h4" color="primary" className={classes.typography}>
                        Hello
                    </Typography>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={4}>
                            heloo
                            <Paper styles={{ height: 80, width: "100%", backgroundColor: "blue"}} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            everyone
                            <Paper styles={{ height: 80, width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            people
                            <Paper styles={{ height: 80, width: "100%" }} />
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </Container>
    );
}

export default Test;

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Circular.css'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
            <div className={'circular bg-dark'}>
                <div className={`${classes.root} align-items-center justify-content-center `}>
                    <CircularProgress color="secondary" />
                    <h2>Loading...</h2>
                </div>
            </div>
    );
}
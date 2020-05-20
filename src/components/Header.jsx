import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import civicTechHubLogo from '../media/images/civicTechHub.svg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff',
        color: '#231690'
    },
    media: {
        height: 0,
        paddingTop: '30px',
    },
}));

export default function Header() {
    const classes = useStyles()
    return (
        <AppBar position="relative" className={classes.root}>
            <Toolbar background='white'>
                <img src={civicTechHubLogo} alt='Civic Tech Hub'/>
            </Toolbar>
        </AppBar>
    )
}
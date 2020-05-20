import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'darkBlue',
        color: 'white',
        padding: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    ol: {
        display: 'block',
        lineHeight: '10px'
    },
    link: {
        color: 'white',
        fontSize: '20px',
        paddingRight: '20px',
        paddingBottom: '30px'
    },
    icon: {
        marginRight: theme.spacing(0.5),
        color: 'white',
        width: 20,
        height: 20,
    },
}));


function Copyright() {
    return (
        <Typography variant="h6" color="inherit" align="left">
            {'Copyright © '}
                Civic Tech Hub
            {' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

function Links() {
    const classes = useStyles();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'right'
        }}>
            <Breadcrumbs classes={classes} >
                <Link href="https://github.com/civictechhub"  className={classes.link}>
                    <GitHubIcon className={classes.icon}/>
                    GitHub
                </Link>
                <Link href="https://www.linkedin.com/company/civictechhub"  className={classes.link}>
                    <LinkedInIcon className={classes.icon} />
                    LinkedIn
                </Link>
                <Link href="https://www.instagram.com/civictechhub/"  className={classes.link}>
                    <InstagramIcon className={classes.icon} />
                    Instagram
                </Link>
                <Link href="https://www.facebook.com/civictechhub"  className={classes.link}>
                    <FacebookIcon className={classes.icon} />
                    Facebook
                </Link>
                <Link href="https://twitter.com/civictechhub?lang=en"  className={classes.link}>
                    <TwitterIcon className={classes.icon} />
                    Twitter
                </Link>
            </Breadcrumbs>
        </div>

    )

}



export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h4" align="left" gutterBottom>
                Civic Tech Hub
            </Typography>
            <Copyright/>
            <Links />
        </footer>
    );
}
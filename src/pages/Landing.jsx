import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingBody from "../components/landing/LandingBody";

export default function Landing() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <LandingBody />
            < Footer />
        </React.Fragment>
    );
}
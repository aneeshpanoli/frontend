import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProjectsList from './ProjectsList';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LandingPageImage from '../../media/images/landing_page_image.svg'
import SearchBar from './SearchBar';
import { useTrackedState } from 'reactive-react-redux';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        display: "flex"
    }
}));

export default function LandingBody() {

    const { searchedProjectList } = useTrackedState()
    const classes = useStyles()
    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" style={{color: '#231690', float: 'left'}}>
                        Together we can survive this crisis
                    </Typography>
                    <Typography variant="h5" color="textSecondary" paragraph style={{float: 'left'}}>
                        Search the largest database of projects and
                        organizations dedicated to fighting COVID-19
                    </Typography>
                    <img src={LandingPageImage} alt='Landing Page' style={{
                        float: 'right'
                    }}/>
                    <SearchBar/>
                </Container>
            </div>
            <ProjectsList projects={searchedProjectList}/>
        </main>
    )

}
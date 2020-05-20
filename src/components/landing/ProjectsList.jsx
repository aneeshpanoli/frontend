import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

const ProjectsList = (props) => {
    const classes = useStyles

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
                {props.projects.map((project) => (
                    <Grid item key={project._source.id} xs={12} sm={6} md={4}>
                        <ProjectCard project={project._source}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default ProjectsList
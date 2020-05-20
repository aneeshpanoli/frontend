import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'reactive-react-redux';
import { getProjectTitleSearchResult } from '../../server/ApiCalls';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import isEmpty from 'lodash/isEmpty'

const useStyles = makeStyles((theme) => ({
    searchBar: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        minWidth: theme.spacing(2),
        float: "left",
        borderColor: 'grey'
    },
    margin: {
        margin: theme.spacing(1),
    }
}));


export default function SearchBar() {

    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()
    const classes = useStyles()

    const enterKeyPressedHandler = (event) => {
        if (event.keyCode === 13) {
            if (!isEmpty(searchValue)) {
                getProjectTitleSearchResult(searchValue,dispatch)
            }
        }
    }

    return (
        <div className={classes.searchBar}>
            <Grid container spacing={2} justify="center" alignItems='center'>
                <Grid item>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-search">Search Projects</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-search"
                            value={searchValue}
                            onChange={event => setSearchValue(event.target.value)}
                            onKeyDown={(e) => enterKeyPressedHandler(e)}
                            labelWidth={120}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button
                        type="submit"
                        variant="outlined"
                        style={{color: 'green', borderColor: 'green'}}
                        onClick={() => getProjectTitleSearchResult(searchValue,dispatch)}
                    >
                            Search
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
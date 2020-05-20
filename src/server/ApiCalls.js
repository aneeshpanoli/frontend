import axios from 'axios';
import { updateProjectList } from "../state/state-actions";

const BASE_API = process.env.REACT_APP_BASE_URL;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.create({
    baseURL: BASE_API,
    headers: {
        'X-CSRFToken': document.cookie.split('=')[1],
        'X-Requested-With': 'XMLHttpRequest',
        "Content-type": "application/json"
    }
});

export const getProjectTitleSearchResult = (searchValue, dispatch) =>{
    axios.get(BASE_API, {
        'params': {
            'q':{
                'query':{
                    'match_phrase_prefix':{
                        'title': searchValue
                    }
                }
            }
        }
    })
        .then(response => dispatch(updateProjectList(response.data.hits)))
        .catch(error =>  { return Promise.reject(error) })
}


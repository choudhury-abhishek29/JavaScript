import axios from 'axios';

export const fetchContest = (contestId) =>
{
    let url = '/api/contests/'+contestId;
    let data =  axios.get(url)
                     .then(resp => resp.data);
    return data;
}

export const fetchContestList = () =>
{
    let url = '/api/contests';
    let data =  axios.get(url)
                     .then(resp => resp.data.contests);
    return data;
}
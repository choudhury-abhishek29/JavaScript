import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
import axios from 'axios'; 

const pushState = (obj, url) =>
{
  window.history.pushState(obj,'',url);
}

const onPopState = handler =>
{
  window.onpopstate = handler;
}

class App extends React.Component {
  // state = {
  //   pageHeader: 'Naming Contests',
  //   contests: this.props.initialContests,
  //   currentContestId : ''
  // };
  state = this.props.initialData;

  componentDidMount()
  {
    onPopState((event)=>
    {
      this.setState({
        currentContestId : (event.state || {}).currentContestId
      });
    });
  }

  fetchContest = (contestId) =>
  {
    pushState({currentContestId:contestId}, `/contest/${contestId}`);

    api.fetchContest(contestId)
        .then(contest=>{
          this.setState({
                         currentContestId : contest.id
                        })
        });
  }

  fetchContestList = () =>
  {
    pushState({currentContestId:null}, `/`);

    api.fetchContestList()
        .then(contests=>{
          this.setState({
                         currentContestId : null,
                         contests
                        })
        });
  }

  pageHeader=()=>
  {
    if(this.state.currentContestId)
    {
      return this.currentContest().contestName;
    }

    return 'Naming Contest';
  }

  currentContest=()=>
  {
    return this.state.contests[this.state.currentContestId];
  }

  currentContent=()=>
  {
    if(this.state.currentContestId)
    {
      return <Contest contestListClick={this.fetchContestList} {...this.currentContest()} />
    }
    
    return <ContestList contests={this.state.contests}
                    onContestClick={this.fetchContest} />

  }

  render() {
      let {initialContests} = this.props;
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}        
      </div>
    );
  }
}

export default App;
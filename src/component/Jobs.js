import React from "react";
import {getAlljobs} from "../utils/db";
import PropTypes from "prop-types";
import Searchjob from "./Search";
import {useSearchParams } from "react-router-dom";
import CardJobs from "./CardJobs";


function JobsWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }

  return <Jobs defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dbjobs : getAlljobs(),
      keyword : props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const dbjobs = this.state.dbjobs.filter((job) => {
      return job.job.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return(
    <div>
      <Searchjob keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
      <CardJobs dbjobs={dbjobs} />
    </div> 
    )
  }
}


Jobs.propTypes = {
  defaultKeyword : PropTypes.string,
  keywordChange : PropTypes.func.isRequired
}
export default JobsWrapper;
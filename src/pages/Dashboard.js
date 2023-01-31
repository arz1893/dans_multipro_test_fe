import React from "react";
import SearchForm from "../components/SearchForm";
import ContainerJobList from "../components/ContainerJobList";
import axios from "axios";

class Dashboard extends React.Component {
    state = {
        jobList: []
    }

    getJobList() {
        
    }

    render() {
        return (
            <>
                <SearchForm />

                <ContainerJobList />
            </>
        )
    }
}

export default Dashboard

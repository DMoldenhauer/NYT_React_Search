import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";


class Home extends Component {
    state = {
        search: "",
        Results: [],
        topic: "",
        startYear: "",
        endYear: "",
        error: ""
    };

    componentDidMount() {
        // API.getArticle()
        //     .then.then(res => this.setState({ results: res.data.message }))
        //     .catch(err => console.log(err));
        this.setState({ Results: [] })
        // console.log(Results);
    };

    searchForArticles = () => {
        API.searchArticles()
            .then(res =>
                this.setState({ Results: res.data.response.docs })
                
            )
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchArticles(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={this.state.Results}
                />
                <Results
                    results={this.state.Results}
                />
            </div>
        );
    }
}


export default Home;
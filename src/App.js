import React, { Component } from "react";
import Search from "./components/Search";
import Result from "./components/Result";

class App extends Component {
  state = {
    concept: "",
    image: [],
  };
  checkApi = () => {
    const concept = this.state.concept;
    const url = `https://pixabay.com/api/?key=17670849-7beae537d8bb0100e52b7c4a2&q=${concept}&per_page=80`;

    //console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ image: res.hits }));
  };

  searchData = (concept) => {
    this.setState(
      {
        concept,
      },
      () => {
        this.checkApi();
      }
    );
  };
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Search Image</p>
          <Search searchData={this.searchData} />
        </div>
        <Result image={this.state.image} />
      </div>
    );
  }
}

export default App;

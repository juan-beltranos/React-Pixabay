import React, { Component } from "react";

class Search extends Component {
  searchRef = React.createRef();

  getData = (e) => {

    e.preventDefault();

    const concept = this.searchRef.current.value;
    
    this.props.searchData(concept);
  };

  render() {
    return (
      <form onSubmit={this.getData}>
        <div className="row ">
          <div className="form-group col-md-8">
            <input
              ref={this.searchRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search you image. Ej: Soccer"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-info btn-block"
              value="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;

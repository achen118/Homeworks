import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  componentWillMount() {
    this.props.fetchSearchGiphys("golden retriever");
  }

  constructor(props) {
    super(props);
    this.state = { searchTerm: "golden retriever" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    const { giphys } = this.props;
    let displayGiphys = [];
    if (giphys.length > 0) {
      displayGiphys = <GiphysIndex giphys={ giphys } />;
    }
    return (
      <div>
        <form onSubmit={ this.handleSubmit } className="search-bar">
          <input onChange={ this.handleChange } type="text" value={ this.state.searchTerm } />
          <input type="submit" value="Search Giphy" />
        </form>
        { displayGiphys }
      </div>
    );
  }
}

export default GiphysSearch;

import React from 'react';
import Candidates from './Candidates';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      candidates: []
    };
  }

  async componentDidMount() {
    let resp = await fetch('http://localhost:3002/candidate');
    let json = await resp.json();
    this.setState({ candidates: json });
  }

  render() {
    console.log(this.state.candidates);
    return (
      <div>
        {this.state.candidates && (
          <Candidates candidates={this.state.candidates} />
        )}
        Hello
      </div>
    );
  }
}

export default Home;

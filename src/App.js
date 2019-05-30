import React from 'react';
import logo from './logo.svg';
import './App.css';
import { wc } from './util/wc';

export class App extends React.Component
{
  constructor() {
    super();

    this.myRef = React.createRef();

    this.state = {
      contact: {
        firstName: "David",
        lastName: "Lebee"
      }
    }
  }

  componentWillUnmount() {
    this.myRef.current.removeEventListener('sharing');
  }

  componentDidMount() {
    this.myRef.current.contact = this.state.contact;
    this.myRef.current.addEventListener('sharing', e => {
      alert(e.detail.firstName);
    });
  }

  handleFirstNameChanged(e) {
    this.setState({
      contact: { ... this.state.contact, firstName: e.target.value }
    }, () => {
      this.myRef.current.contact = { ... this.state.contact };
    })
    
  }

  render() {
    return (
      <div className="App">
        <person-card ref={this.myRef}>
          <div slot="item-header">
            <p>Some Guy</p>
            <hr/>
          </div>
        </person-card>

        <br />
        FirstName:
        <input type="text" value={this.state.contact.firstName} onChange={this.handleFirstNameChanged.bind(this)} />

        <p>{this.state.contact.firstName}</p>
      </div>
    );
  }
}

export default App;

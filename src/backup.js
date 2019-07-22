import React from 'react';
import marked from 'marked';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    this.marking = this.marking.bind(this);
    // change code above this line
  }
  // change code below this line

  handleChange(event) {
    this.setState(                /////!!!!!!!!!!!!!!!!!
      {input: event.target.value}
    )
    
  }

  marking() {
    let myMarkup = marked(this.state.input);
    return {__html: myMarkup};

  }


  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
          <input value={this.state.input}
          onChange={this.handleChange}
          />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <div dangerouslySetInnerHTML={this.marking()}></div>
      </div>
    );
  }
};





export default App;

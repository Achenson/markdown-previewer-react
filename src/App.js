import React from 'react';
import marked from 'marked';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `A header
  ==
  ## A subheader
      
  A [link](www.google.com)
      
  Inline <span style="color:blue">Blue </span> element
      
  A multi-lane  
  code  
  example
      
  Bullet list:
      
  *  dog
  *  cat
  *  parrot
  *  hamster
  *  pig
  
      
  **A bolded text**

  > A blockquote
      
  ![An image](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Square_200x200.svg/200px-Square_200x200.svg.png)
      
  `
  };
   
    this.handleChange = this.handleChange.bind(this);
    this.marking = this.marking.bind(this);
    
  }
  

  handleChange(event) {
    this.setState(                
      {input: event.target.value}
    ) 
  }

  marking() {
    let myMarkup = marked(this.state.input);
    return {__html: myMarkup};

  }


  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6" >
            <h5>Editor</h5>
            <textarea className="w-100" style={{minHeight: '750px', minWidth: '250px'}} id="editor" value={this.state.input}
              onChange={this.handleChange} > 
            </textarea>
          </div>
          <div className="col-sm-6" >
            <h5>Markdown preview</h5>
            <div className="bg-light px-4 pb-2" style={{minHeight: '750px', maxWidth: '450px'}} id="preview"
             dangerouslySetInnerHTML={this.marking()}> 
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default App;

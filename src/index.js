import * as React from "react";
import * as ReactDOM from "react-dom";
import * as marked from "marked";
import dompurify from "dompurify";


class Editor extends React.Component {
  render() {
    return (
      <div className="card editor">
        <div className="card-body">
          <textarea id="editor" onChange={this.props.handleChange} className="form-control">
            {this.props.input}
          </textarea>
        </div>
      </div>
    )
  }
}

class Previewer extends React.Component {
  render() {
    marked.setOptions({
      breaks: true
    })
    const preview = dompurify.sanitize(marked.parse(this.props.input));
    return (
      <div className="card previewer">
        <div className="card-body">
          <div id="preview" dangerouslySetInnerHTML={{__html: preview}}/>
        </div>
      </div>
    )
  }
}

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Hello\n## Hello\n[Certificate on FreeCodeCamp](https://www.freecodecamp.org/learn)\n```javascript\nlet foo = "bar";\naaa\r```\n\n`let inlineFoo = "inlineBar";`\n1. Lorem\n2. Ipsum\n3. Dolor\n\n> Lorem ipsum\n\n![preview img](https://via.placeholder.com/150)\n\n**So bold**'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 class="text-white text-center title">Markdown Previewer</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <Editor handleChange={this.handleChange} input={this.state.input} />
          </div>
          <div className="col-12 col-md-6">
            <Previewer input={this.state.input} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Presentational />, document.getElementById('root'));
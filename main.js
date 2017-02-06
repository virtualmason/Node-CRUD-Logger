var React = require('react');
var ReactDOM = require('react-dom');
var axios = require("axios");

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[],
            value:""
        };  
    }

    componentDidMount() {
        axios.get("/fruits")
        .then((res) => {
            this.setState({data:res.data});
        })
        .catch(function(error) {
            console.log(error);
        }); 
    }
    handelSubmit() {
        console.log("submit");
    }
    render() {
        return (
          <div>  
            {this.state.data.map((i,item,array) => {
                console.log(i);
                return(<p>{i}</p>);
            })}
          
            <form style={{float:"clear-Left"}} onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>    
          </div>
       );
      }
}
ReactDOM.render(<Content />, document.getElementById('content'));
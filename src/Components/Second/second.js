import { Component } from 'react';

    var i = 0;
class Second extends Component {
    constructor(props){
        super(props);
        this.state = i;
    }

    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.tick(),1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render() {
        return (<div>{this.state.date}</div>)
    }

    tick(){
        this.setState({
            date: i++
        });
    }
}

export default Second;
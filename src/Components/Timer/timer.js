import { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
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
        return (<div>{this.state.date.toLocaleTimeString()}</div>)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
}

export default Clock;
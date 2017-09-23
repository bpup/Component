import React from 'react'
import {connect} from 'react-redux';
import {increment, decrement, reset} from 'ACTION'
import '../css/twoside.css'
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器


class Hello extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.props.increment()   
        this.setState({
            count: this.props.count.count
        });
    }
    _handleClick2() {
        this.props.decrement()
        this.setState({
            count:this.props.count.count
        });
    }
    _handleReset() {
        this.props.reset()        
        this.setState({
            count: 0
        });
       
    }

    render() {
        console.log(this.props.count.count)
        return  <div>
                this is home~{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>增++</button>
                <button onClick={() => this._handleClick2()}>增--</button>
                <button onClick={() => this._handleReset()}>reset</button>
        </div>
        
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);



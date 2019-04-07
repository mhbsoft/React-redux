import React from 'react';
import {connect} from 'react-redux';
import {addGun, remGun, addGunAsync} from './index.redux'

//将 state 中 你想要的 属性 放到 props 的state中
const mapStatetoProps = (state)=>{
    return {num: state}
}
//将 state 中 你想要的方法放到 props 中， 自动 store.dispatch()
const actionCreators = {addGun, remGun, addGunAsync};

//未安装 状态管理装配器的时候这么用
// App = connect(mapStatetoProps, actionCreators)(App);

//安装babel-plugin-transform-decorators-legacy 状态管理装配器的时候可以这么用
@connect(mapStatetoProps, actionCreators)
class App extends React.Component{
    render(){
        const num = this.props.num;
        const addGun = this.props.addGun;
        const remGun = this.props.remGun;
        const addGunAsync  = this.props.addGunAsync;

        return <div>
            <h1>现在有机枪{num}把</h1>
            <button onClick={()=> addGun()}>申请武器</button>
            <button onClick={()=> remGun()}>上交武器</button>
            <button onClick={()=> addGunAsync()}>两天后再给</button>
        </div>
    }
}

export default App;
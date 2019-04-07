import React from 'react';
import {connect} from 'react-redux';
import {addGun, remGun, addGunAsync} from './index.redux'

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

const mapStatetoProps = (state)=>{
    return {num: state}
}

const actionCreators = {addGun, remGun, addGunAsync};

App = connect(mapStatetoProps, actionCreators)(App);

export default App;
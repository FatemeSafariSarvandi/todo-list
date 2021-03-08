import React , {Component}from 'react';
import './App.css';
import InputPart from './component/InputPart';

class App extends Component{
    render(){
        return(
            <div>
                <div id="title">TODO-LIST</div>
                <InputPart/>
            </div>
        )
    }
}

export default App;
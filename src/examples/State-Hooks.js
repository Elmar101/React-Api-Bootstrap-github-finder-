import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

/* import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={ count: 0 };
    }

    componentDidMount() {
        console.log('componentDidMount: construktordan sonra chalisan ilk metod classdas ')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate: state ve ya props deyisdiyi anda calisacaq metod  ')
    }

    render() {
        return (
            <div>
               <p> Buttona { this.state.count} defe kilik etdiz </p>
               <button onClick={()=> this.setState({ count: this.state.count+1 }) }> +1 </button>
               <button onClick={()=> this.setState({ count: this.state.count-1 }) }> -1 </button>
            </div>
        )
    }
}  */

const App=(props) =>{
    const [ count , setCount ] = useState(props.count);
    const [ text , setText] = useState(props.text);

    useEffect( ()=> {
        console.log(" componentDidMountda olayinda ");
        const countData = localStorage.getItem('count');
        if(countData){
            setCount( Number(countData ) );
        }
    },[])
    
    useEffect( ()=> {
        console.log("1 ci componentDidMount 2 ci count deyisdikde countdidUpdate de ");
        localStorage.setItem('count',count);
    },[count] )
    
    return (
        <div>
           <p> Buttona { count } defe kilik etdiz </p>
           <button onClick={()=> setCount(count+1) }> +1 </button>
           <button onClick={()=> setCount(count-1) }> -1 </button>
           <button onClick={()=> setCount(props.count) }> sifirla </button>

           <p>  inputa text yazinizx : { text }  </p>
           <input type="text" value={ text } onChange={ (e)=> setText( e.target.value ) } />
        </div>
    )
}

ReactDOM.render(<App count={ 0 } text={''} />, document.getElementById('root'));
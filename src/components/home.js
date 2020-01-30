import React, { Component}  from 'react'

// COMPONENT 
import Featured from './featured'
import Subscriptions from './subscriptions'
import Blocks from './blocks'
import Poll from './poll'


// Variable 
const URL_HOME ='http://localhost:3004/home'

class Home extends Component{

    constructor (props){
        super(props);
        this.state ={
            home:''
        }
    }

    componentDidMount(){
        // Pass url as a valide method 
        fetch(URL_HOME,{method:'GET'})
        // grabe the json 
        .then(response => response.json())
        // add to state 
        .then(json=>{
            // console.log(json)
            this.setState({
                home:json
            })
        })
    }

   render (){
       return (
        <div> 
            <Featured slides={this.state.home.slider}/>
            <Subscriptions/>
            <Blocks blocks={this.state.home.blocks}/>
            <Poll/>
        </div>
       )
   }
    
}

export default Home;
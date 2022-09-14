import React, { Component , Fragment } from 'react' ; 
import data from './data.json' ; 

export default class TryGlass extends Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            imgModelURL : ''  , 
            name : '' , 
            opacity : "0" ,
            price : 0 , 
            desc : ""
        }
    }
    changeGlass = (url , name , opacity , price , desc ) => {
        this.setState({
            imgModelURL : url , 
            name , 
            opacity ,
            price , 
            desc 
        } ) ; 
    }
    renderData = () => {
        let x = data.map((glass , index ) => {
            return (
                <div  className="col-4 my-4 d-flex justify-content-center">
                    <img onClick={() => {
                        this.changeGlass(data[index].url , data[index].name , "1" , data[index].price , data[index].desc )
                    }} className='img-fluid w-50' src={glass.url} alt={glass.name} />
                </div>
            ) ; 
        })
        return (
            <div className='row container mx-auto' >
                {x}
            </div>
        ) ; 
    }
  render() {
    return (
      <div className='tryGlass row container mx-auto'>
        <div className="col-12 ">
            <div className="buttons d-flex justify-content-center">
                <button onClick = {() => {
                    this.changeGlass('','') ; 
                }} className='btn btn-primary mx-4 my-4 w-25'>Before</button>
            </div>
        </div>
        <div className="col-12">
            <div className="row container mx-auto">
                <div className="col-12 d-flex justify-content-center nonameCon">
                    <img className='img-fluid imgModel' src="./glassesImage/model.jpg" alt="model" />
                    <div className="glassModel">
                        <img className='img-fluid glassModelImage' src={this.state.imgModelURL} alt={this.state.name} />
                    </div>
                    <div className="glassDetail" style={{opacity : this.state.opacity}}>
                        <p>{this.state.name} - {this.state.price}$</p>
                        <p>{this.state.desc}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12">
        {/* {this.renderData()} */}
            {this.renderData()}
        </div>
      </div>
    )
  }
}

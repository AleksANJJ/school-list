import { Component } from 'react';
import check from './check.jpg'

export class School extends Component {
    state = {
        userInput:"",
        schoolList:[]
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(input) {
        if(input ==='') {
            alert("Fill in the field, please!")
        }
        else {
            let listArray = this.state.schoolList;
            listArray.push(input);
            this.setState({schoolList: listArray, userInput: ''})
        }
    }
    deleteItem() {
        let listArray = this.state.schoolList;
        listArray =[];
        this.setState({schoolList: listArray});
    }
    schoolLi(event) {
        const list = event.target;
        list.classList.toggle('sch');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return (
            <div><form onSubmit={this.onFormSubmit}>
        <div className="container">
            <h1>Get your child to school</h1>
        </div>
        <div className="container">
            <input type="text" placeholder='What to buy for school?' onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value = {this.state.userInput}/>
            <button className='btn add' onClick={() => this.addItem(this.state.userInput)}>ADD</button>
        </div>
        <ul>
            {this.state.schoolList.map((item, index) => (<li onClick={this.schoolLi} key = {index}><img src={check} width="40px" alt="checking"/>
            {item}</li>))}
        </ul>
        <div className="container">
            <button className='btn delete' onClick={() => this.deleteItem()}>DELETE</button>
        </div>
        </form>
        </div>
        )
    }
    
}

export default School;
    
    


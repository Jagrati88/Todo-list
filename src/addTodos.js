import React, {Component} from 'react'

class AddTodos extends Component{
    state = {
        name:null
    }
     
    handleChange = (e) => {
        this.setState({
            ['name']:e.target.value
        })

        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodos(this.state)
        document.querySelector('form').reset();
    }


    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "item"></label>
                    <input onChange = {this.handleChange} type="text" placeholder = "Add a Todo" id ="item"></input>
                    <button class = "btn-btn-add">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodos
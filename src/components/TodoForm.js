import React from "react";








class ToDoForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
          inputValue:""
        }
      }

    //checking for changes in value field
    handleChanges = e => {
        this.setState({
            
          ...this.state,
          inputValue:e.target.value
        })
        // update state with each keystroke
        console.log(this.state)
      };
      
      handleClick = (e) => {
          e.preventDefault();
          this.props.handleAddItem(this.state.inputValue)
      }


    render(){
        return(
            <form>

                <label>Input Yo shiet

                   <input onChange={this.handleChanges}type="text" name="task"/>
                   <button onClick={this.handleClick}>add</button>
                   
                </label>
            </form>
        )
    }
}

export default ToDoForm;
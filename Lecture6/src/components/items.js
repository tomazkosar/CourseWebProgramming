import React, { } from 'react'

class Items extends React.Component{
  render(){
    return (
      <div>
        {/*Displaying items in a table*/}
        <center><h1>Note items</h1></center>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th><th>Note item</th><th>Category</th><th>Done</th><th>Change</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <tr>    
                <td>{(item._id).toString()}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{(item.done) ? "Yes" : "No"}</td>
                <td><input class="btn btn-primary" 
                      type="submit" name="Change" value="Change"/></td>
              </tr>
            ))}
        </tbody>
        </table>
      </div>
    )    
  }
}

export default Items



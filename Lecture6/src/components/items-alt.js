import React from 'react'

const Items = ({ items }) => {
  return (
    <div>
      <center><h1>Note items</h1></center>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th><th>Note item</th><th>Done</th>
          </tr>
        </thead>
        <tbody>
        {this.items.map((item) => (
          <tr>    
            <td>{(item._id).toString()}</td>
            <td>{item.name}</td>
            <td>{(item.done).toString()}</td>
            <td><input class="btn btn-primary" 
                  type="submit" name="Change" value="Change"/></td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
};

export default Items


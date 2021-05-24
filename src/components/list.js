
import React from 'react';
const List = (prop) => {
    const dataList = prop.list.map((i,index) => {
      return (
        <tr key={index}>
          <th>{index}</th>
          <td>{i.name}</td>
          <td>{i.age}</td>
        </tr>
      );
    });
    return (
      <div className="container">
      <table className="table table-primary table-striped col-4 text-center shadow-lg">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>{dataList}</tbody>
      </table>
      </div>
    );
  };
  


export default List
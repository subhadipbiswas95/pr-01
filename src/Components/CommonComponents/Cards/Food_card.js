import React, { useEffect } from "react";

const Food_card = () => {
  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/asset/data.json");
    const data = await response.json();

    //  const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  });
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>

    </div>
  );
};

export default Food_card;

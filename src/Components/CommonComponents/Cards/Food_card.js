import React, { useEffect } from 'react'

const Food_card = () => {
  const getUsers = async () => {
    const response = await fetch('./asset/data.json');
    const data = await response.json();

    //  const data = await response.json();
    console.log(data);
  }

useEffect(() => {
  getUsers()
});
return (
  <div>
    <h1>Items</h1>
    <div className="card" style={{ width: '300px', height: '30px' }}>
      <img src="/img/food.jpg" className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">Item Name</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating</li>
        <li className="list-group-item">Description</li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dicta!</p>

      </ul>
    </div>
  </div>








)
}

export default Food_card

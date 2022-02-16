import React, { useEffect ,useState} from "react";

const Food_card = () => {
  const [users,setUsers]=useState([])
  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/asset/data.json");
    setUsers (await response.json());

    //  const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  },[]);
  return (
   <>
   <div className="row text-center">
   {
     users.map((elem)=>{
       return(
        <div className="card" style={{width: '18rem' }}>
        <img src={elem.CardImgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elem.ItemName}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
  
      </div>
       )
     })
   }
   </div>
   </>

   
  );
};

export default Food_card;

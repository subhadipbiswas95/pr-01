import React from 'react'
import Food_card from '../../Components/CommonComponents/Cards/Food_card'
import Toggle from '../../Components/Toggle/Toggle'

/*
*****ALGORITHM******


STEP 1: USING USE_EFFECT CALL API
            http.get(url).then((data.json())=>{
                main_data = data;
            })
STEP 2: AFTER SUCCESSFULL API CALL FILTER THE DATA BY CARD TYPE.
            food_data = main_data.filter((item)=> ADD FILTER HERE)[SEARCH GOOGLE FOR IT IF YOU HAVE CONFUTION.]
STEP 3: CALL CARD_GROUP COMPONENT AND SEND food_data ARRAY TO THAT COMPONENT AS INPUT. [SEARCH GOOGLE HOW TO PASS DATA FROM ONE COMPONENT TO ANOTHER IN REACT]

*/


const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to Home page</h1> */}
      <Toggle />
      <Food_card/>
     
    </div>
  )
}

export default Home

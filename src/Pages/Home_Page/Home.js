import React from 'react'
import Food_card from '../../Components/CommonComponents/Cards/Food_card'
import Toggle from '../../Components/Toggle/Toggle'

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

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'

import gods from '../../static/gods'

const DeityPage = () => {
    const [currentDeity, setCurrentDeity] = useState({
        id: 0,
        image: "",
        symbol: "",
        details: {
            name: "",
            title: "",
            alignment: ""
        }
      })
    const params = useParams().name;
    

    useEffect(() => {
        setCurrentDeity(gods.find((god) => god.details.name === params))
    }, [])
    
    
  return (
    <div className='deityPage'>
        <img className='image' src={currentDeity.image} alt="" />
        <div className="deityDetails">
            <h1>{currentDeity.details.name}</h1>
            <h2>{currentDeity.details.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa doloremque molestiae dicta ex autem aliquam consectetur, sequi ea voluptate ad explicabo enim amet error deleniti! Ex atque aperiam architecto numquam molestias optio et expedita tenetur aliquam est earum maxime nisi voluptate commodi reiciendis voluptatum explicabo odio officiis iste, pariatur harum tempora reprehenderit. Unde, similique repellendus, asperiores quae maxime, nihil nobis ullam inventore delectus in sint? Quasi animi optio voluptate distinctio, repellendus sed id iusto nesciunt sunt illo magni, eum, ab quis? Enim et reiciendis eum doloremque quibusdam aut commodi animi sint dignissimos consectetur. Autem expedita doloremque distinctio repudiandae dignissimos!</p>
            <div className="lore">
              <img src={currentDeity.symbol} alt="" />
              <div className="loreDetails">
                <h3>The followers of {currentDeity.details.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam quas id perspiciatis, voluptatibus amet ipsa qui eum asperiores magni sint aliquid praesentium quae aut earum! Veritatis debitis distinctio illum id, ipsum, tempora beatae tempore officia natus dicta dolore ut voluptatem ex molestiae labore molestias deleniti optio mollitia aspernatur reprehenderit.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DeityPage
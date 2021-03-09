import React, { useState } from 'react'
// Third-party imports
import { StyledCard, Title, Info, Button } from './styledComponents'
// Next imports
import Link from 'next/link'
// Components
import Header from './Header'

function SellOrderList() {

  const [state, setState] = useState({
    background: 'white'
  })
  return (
    <>
    
    <StyledCard
        background={state.background}
        style={{ cursor: 'pointer' }}
        onMouseOver={() => setState({ ...state, background: 'rgb(240,243,248)' })}
        onMouseLeave={() => setState({ ...state, background: 'white' })}
      >
        <div className='text-left'>
          <div>
            <Title> SELL ORDER NUMBER </Title>
            <Info> 1 </Info>
          </div>

          <Link
            href='./SellOrderDetails'
          >
            <a>
              <div>
                <Title> SELLER STORE </Title>
                <Info> Meloon </Info>
              </div>

              <div>
                <Title> CREATION DATE </Title>
                <Info> 4/03  </Info>
              </div>

              <div>
                <Title> SHIPPING METHOD </Title>
                <Info> adsfs </Info>
              </div>

            </a>
          </Link>
        </div>
      </StyledCard>
    </>
  )
}

export default SellOrderList;
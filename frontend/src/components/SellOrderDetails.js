import React from 'react'
// Third-party imports
import { Divider } from 'antd'
// Components
import Header from './Header'
import {
    BackgroundDiv,
    ProductsDivHeader,
    DocumentDiv,
    RowDiv,
    ProductsDiv,
    ProductItem,
    PRIMARY_COLOR
  } from './styledComponents'
  

function SellOrderDetails() {

    return (
        <>

<BackgroundDiv>
    
    <DocumentDiv>
      <RowDiv>
       <div style={{ textAlign: 'center', width: '40%' }}>
          <div>
            <img src='https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/6006fbca47ec77fa015be5c6_logo-melonn.png' height='20em' alt='logo' />
          </div>
        </div>

        <div style={{ textAlign: 'center', width: '50%' }}>
          <h5> MELOON </h5>        
        </div>
  
              <div style={{ textAlign: 'center', width: '20%' }}>
                <h5>
                  <span style={{ color: PRIMARY_COLOR }}> No. </span> 1.
                </h5>
              </div>

      </RowDiv>
      <Divider />

      <RowDiv>
        <h6> Order Information</h6>
      </RowDiv>

      <RowDiv>
      
              <div style={{ textAlign: 'center', width: '30%' }}>
              <p style={{ fontSize:'13px', margin: '1em' }}>Buyer full name</p>
                Angelica Maria Moreno
              </div>
  
              <div style={{ textAlign: 'center', width: '30%' }}>
              <p style={{ fontSize:'13px', margin: '1em' }}>Buyer phone number</p>
                3213223925
              </div>
  
              <div style={{ textAlign: 'center', width: '30%' }}>
              <p style={{ fontSize:'13px', margin: '1em' }}> Buyer email</p>
                angelica_uno@hotmail.es
              </div>
            </RowDiv>
      
            <br />
      
      <RowDiv style={{borderTop: `1px dashed ${PRIMARY_COLOR}`, paddingTop:'2%'}}>
        <h6> Shipping Information</h6>
      </RowDiv>

            <RowDiv>
            <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Address</p>
                Cra 5 EST # 2- 20
              </div>
  
              <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>City</p>
                Madrid
              </div>
  
              <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Region</p>
                Cundinamarca
              </div>

              <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Country</p>
                Colombia
              </div>

              {/* <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Method</p>
                <select>{methods[0]}</select> 
              </div> */}

            </RowDiv>

      <br />

      <ProductsDivHeader>
              <div style={{ textAlign: 'center', width: '4%' }}>
                <span></span>
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
                <p>Product Name</p>
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
                <p>Product Quantity</p>
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
                <p>Product Weight</p>
              </div>
              <div style={{ textAlign: 'right', width: '3%' }} />
      </ProductsDivHeader>

      
      <ProductsDiv>
              <div style={{ textAlign: 'center', width: '2%' }}>
                1.
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
                Camiseta
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
               10
              </div>
              <div style={{ textAlign: 'center', width: '30%' }}>
                20 kg
              </div>
      </ProductsDiv>
     

    </DocumentDiv>
  </BackgroundDiv>
        
       </>
    )

}

export default SellOrderDetails;
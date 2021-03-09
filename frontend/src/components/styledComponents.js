import styled from 'styled-components'

var BOX_SHADOW = '8px 10px 14px 2px rgba(221,226,229,1)';
export var PRIMARY_COLOR = '#b9d68d';

export const StyledCard = styled.div`
  background: ${(props) => props.background};
  border-radius: 10px;
  box-shadow: ${BOX_SHADOW};
  padding: 5%;
  width: 25%;
  margin: 2%;
  border-top: ${(props) => props.border};
  a:link, a:visited, a:active {
    text-decoration:none;
}
`
export const Button = styled.a`
    border-radius: 15px;
    text-align: center;
    width: 12em;
    background-color: #a7ca70;
    box-shadow: ${BOX_SHADOW};
    font-family: Poppins, sans-serif;
    padding: 1em;
    color: #fff;
    font-size: 14px;
    outline:none;
    line-height: 160%;`

export const Title = styled.p`
  color: rgb(186,195,208);
  font-weight: bold;
  margin-bottom: 0;
  font-size: ${(props) => props.fontSize || '1em'};
`

export const Info = styled.div`
  color: rgb(118,129,145);
  font-size: ${(props) => props.fontSize || '1.2em'};
  margin-bottom: ${(props) => props.margin || '12px'};
  &:hover {
    color: ${(props) => props.hoverColor || 'rgb(118,129,145)'};
  }
`

export const BackgroundDiv = styled.div`
  position: absolute;
  overflow-y: scroll;
  top: 1%;
  bottom: 0%;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
`
export const ButtonsDiv = styled.div`
  position: absolute;
  top: 2%;
  display: flex;
  justify-content: space-between;
  width: 60%;
  h3 {
    color: ${PRIMARY_COLOR};
  }
`
export const DocumentDiv = styled.div`
  position: absolute;
  top: 10%;
  background: white;
  box-shadow: ${BOX_SHADOW};
  width: 55vw;
  min-height: 90vh;
  border-radius: 10px;
  padding: 3%;
  margin-bottom: 5%;
`

export const RowDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  min-height: ${(props) => props.height};
  h6 {
    color: ${PRIMARY_COLOR};
    font-size: 1em;
  }
  h5 {
    color: grey;
  }
  p {
    color: grey;
    margin: 0;
  }
`

export const ProductsDivHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-top: 2.5px solid ${PRIMARY_COLOR};
  padding: 2% 2% 0% 2%;
  p {
    color: ${PRIMARY_COLOR};
    font-size: 0.9em;
    font-weight: 500;
  }
`

export const ProductsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 2% 2% 0% 2%;
  p {
    color: ${PRIMARY_COLOR};
    font-size: 0.9em;
    font-weight: 500;
  }
`

export const ProductItem = styled.p`
  color: ${(props) => (props.empty ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.8)')};
`
export const Input = styled.input`
  font-family: Poppins, sans-serif;
  border: solid, 1px, red;
  marginLeft: 1em;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0 hsl(0deg 0% 66% / 30%);
  padding-top: 0px;
  padding-bottom: 0px;
  border: 1px solid transparent;
  lenght: 5em;
  width: ${(props) => props.width || '100%'};
`
export const BuyerTitle = styled.p`
fontSize:'1px';
margin: '1em';
`
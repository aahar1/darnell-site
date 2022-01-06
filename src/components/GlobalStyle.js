import {createGlobalStyle} from 'styled-components';
import single from '../images/single.JPEG';


const GlobalStyle= createGlobalStyle`


*{margin:0;
  padding: 0;
  box-sizing: border-box;

}

body{
background-repeat: no-repeat;
 background-size: cover;
//overflow: fixed;
background-attachment: fixed;
 -webkit-background-size: 100% auto;
-moz-background-size: 100% auto;
-o-background-size: 100% auto; 
object-fit: cover;
width: 200px;
height: 100vh;



}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding:1rem 2rem ;
    border: 3px solid #5680e9;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
      background-color: #84ceeb;
      color: white;
    }
}

h1{
  font-weight: bold;
  color:#84ceeb ;
}

h2{
  font-weight: lighter;
  font-size: 4rem;
}
h3{
  color: white;
}
h4{
  font-weight: bold;
  color: white;
}
a{
  font-size: 1.1rem;
}

p{
  padding: 4rem 0rem;
  color: white;
  font-size: 1.6 rem;
  line-height: 150%;
  text-align: center;

}
span{
  color: #84ceeb;
}

`;

export default GlobalStyle;
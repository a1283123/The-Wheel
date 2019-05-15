import React from "react";
import classes from "./Products.module.css";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import ContentPage from "../ContentPage/ContentPage";
import { Button, Container, Col, Row, Carousel } from 'react-bootstrap';
import { IoIosCart } from "react-icons/io";
import ControlledCarousel from './ControlledCarousel'
import ProductsSearch from './ProductsSearch'
import ProductsCard from './ProductsCard'

const startState = { autoAlpha: 0, y: -50 };

class products  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prouduct: [],
         }
  }

 
//   componentDidMount() {
//     fetch('/prouduct', {
//         method: 'GET'
//     })
//     .then(function(data) {
//       this.setState({prouduct: data});
//     }).catch(err => {
//     console.log(err);
//     })
  
// }

componentDidMount() {
 
  fetch('http://localhost:5555/prouduct', {
      method: 'GET'})
      .then(res => res.json())
      .then(function(data) {
    this.setState({prouduct: data}); })
    
    .catch(err => {
  console.log(err);
  })
  
}


  render() {
    return (
      <>
       <Transition
    unmountOnExit
    in={this.props.show}
    timeout={1000}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={ (node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: this.props.show ? 1 : 0,
        y: this.props.show ? 0 : 50,
        onComplete: done
      });
    }}
  >   

  <div >
    
    
  <ControlledCarousel />
 
    <div>
    <Button className={classes.Button} ><IoIosCart  size={25}/>購物車</Button>
    </div>
    <Container className={classes.SearchSideBar}>
    <Row>
      <Col lg={3} >
      <ProductsSearch/>
      </Col>
      <Col lg={9} ><ProductsCard/></Col>
      </Row>
    </Container>
      <div>
        <h1>123</h1>
          {this.state.prouduct.map((item)=>(
            <li>{item.p_name}</li>
            ))}
  
      </div>
   
                   
  {this.props.children}
  </div>
  </Transition>
      </>
    )
  }
}

export default products







// const products = props => {
//   return (
//     <>
    
//     <Transition
//     unmountOnExit
//     in={props.show}
//     timeout={1000}
//     onEnter={node => TweenMax.set(node, startState)}
//     addEndListener={ (node, done) => {
//       TweenMax.to(node, 0.5, {
//         autoAlpha: props.show ? 1 : 0,
//         y: props.show ? 0 : 50,
//         onComplete: done
//       });
//     }}
//   >   

//   <div >
    
    
//   <ControlledCarousel />
 
//     <div>
//     <Button className={classes.Button} ><IoIosCart  size={25}/>購物車</Button>
//     </div>
//     <Container className={classes.SearchSideBar}>
//     <Row>
//       <Col lg={3} >
//       <ProductsSearch/>
//       </Col>
//       <Col lg={9} ><ProductsCard/></Col>
//       </Row>
//     </Container>
    
//   {props.children}
//   </div>
//   </Transition>
//   </>
//   )
// };

// export default products;

import Card from 'react-bootstrap/Card'
import React from 'react'
import classes from '../Products.module.css'
import { Button, Container, Col, Row, Carousel , Form} from 'react-bootstrap'
import { IoIosHeart, IoIosCart } from 'react-icons/io'
// import { TweenMax } from 'gsap/all'
// import { Transition } from 'react-transition-group'
// import ContentPage from '../ContentPage/ContentPage'

// import { IoIosCart } from 'react-icons/io'
// import ControlledCarousel from './ControlledCarousel'
// import { IoIosHand } from 'react-icons/io'

class SingleSiderBar extends React.Component {
  constructor(props) {
    super(props)
    const product = this.props.product
    this.state = {}
  }
  render() {
    const a = this.props.product
    // console.log('product', a[0])
    //console.log(a[0].quantity)

    return (
      <>
        <Container fluid>
             
             <Row noGutters>
               <Col sm={2}>
                   <div className={classes.productSideBarCart}>
                     <h5 className={classes.productSideBarCart2}><IoIosCart size={25} />購物車</h5>
                   </div>
                   <div className={classes.productSideBarGenre}>
                     <p className={classes.productSideBarGenre2}>p_genre/p_genre2</p>
                   </div>
                   <div className={classes.productSideBarBarnd}>
                     <p className={classes.productSideBarBarnd2}>p_brand</p>
                   </div>
               </Col>
               <Col sm={8} >
               
               <div className={classes.productSideBarPrice} >
                 
                   <Col className={classes.productSideBarPrice2}>
                   <h1 >NT:p_price</h1>
                   <p>p_name</p>
                   </Col>
                   <Col sm={4} className={classes.productSideBarPrice3}>
                     <Form.Control style={{'width':'8rem'}} as="select">
                     <option selected>數量</option>
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                       <option>6</option>
                       <option>7</option>
                       <option>8</option>
                       <option>9</option>
                       <option>10</option>
                     </Form.Control>
                   
                     </Col>
 
               </div>
               
               </Col>
               <Col className={classes.productSideBarButtonControl} sm={2}>
               <div >
               <Button className={classes.productSideBarButton}>
                 直接購買
               </Button>
               </div>
               <div>
               <Button className={classes.productSideBarButton2}>
                 加入購物車
               </Button>
               </div>
               </Col>
             </Row>
             
             </Container>
       
       
      </>
    )
  }
}

export default SingleSiderBar

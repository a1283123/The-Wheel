import Card from 'react-bootstrap/Card'
import React from 'react'
import classes from './Products.module.css'
// import { TweenMax } from 'gsap/all'
// import { Transition } from 'react-transition-group'
// import ContentPage from '../ContentPage/ContentPage'
import { Button, Col } from 'react-bootstrap'
// import { IoIosCart } from 'react-icons/io'
// import ControlledCarousel from './ControlledCarousel'
// import { IoIosHand } from 'react-icons/io'


class ProductsCard extends React.Component {
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
        {/* <div style={{ 'max-width': '600px' }}>
          <div className="row">
            <Col md={4}>
              <img
                src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
                class="card-img"
                alt="..."
              />
            </Col>
            <Col md={7}>
              {this.props.product.map(item => (
                <li>{item[0]}</li>
              ))}

              <h8>DA 美利達】舒適型入門款跑車</h8>
              <p>
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptartem
                accusantium doloremque laudantium, veritatis et quasi ropeior
                architecto beatae vitae dicta sunt.
              </p>
            </Col>
          </div>
        </div> */}
        <Card className={classes.top}>
          <div className="row">
            <Col md={4}>
              <Card.Img
                variant="top"
                src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
              />
            </Col>
            <Col md={7}>
              <Card.Title>{this.props.name}</Card.Title>  
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Body>
                <Card.Text className={classes.Space}>NT{this.props.price}</Card.Text>
                <Button variant="primary" className={classes.ButtonSpace}>
                  加入收藏
                </Button>
                <Button variant="primary" className={classes.ButtonSpace2}>
                  查看商品
                </Button>
              </Card.Body>
            </Col>
          </div>
        </Card>
        {/* <Card className={classes.top}>
          <div className="row">
            <Col md={4}>
              <Card.Img
                variant="top"
                src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
              />
            </Col>
            <Col md={7}>
            
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Body>
                <Card.Text className={classes.Space}>NT123</Card.Text>
                <Button variant="primary" className={classes.ButtonSpace}>
                  加入收藏
                </Button>
                <Button variant="primary" className={classes.ButtonSpace2}>
                  查看商品
                </Button>
              </Card.Body>
            </Col>
          </div>
        </Card> */}
        
      </>
    )
  }
}

export default ProductsCard

import Card from 'react-bootstrap/Card'
import React from 'react'
import classes from './Products.module.css'
import { Link } from 'react-router-dom'
// import { TweenMax } from 'gsap/all'
// import { Transition } from 'react-transition-group'
// import ContentPage from '../ContentPage/ContentPage'
import { Button, Col } from 'react-bootstrap'
// import { Link } from 'fs';
// import { IoIosCart } from 'react-icons/io'
// import ControlledCarousel from './ControlledCarousel'
// import { IoIosHand } from 'react-icons/io'

class ProductsCard extends React.Component {
  constructor(props) {
    super(props)
    // const product = this.props.product
    this.state = {}
  }

  handleClick = () => {
    console.log(this.props.p_sid)
    this.setState({
      p_sid: this.props.p_sid,
    })
  }

  render() {
    // const a = this.props.product
    const single = this.props.p_sid
    return (
      <>
        <Card className={classes.top}>
          <div className="row">
            <Col md={4}>
              <Card.Img
                variant="top"
                src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
                alt=""
              />
            </Col>
            <Col md={7}>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Body>
                <Card.Text className={classes.Space}>
                  NT{this.props.price}
                </Card.Text>
                <Button variant="primary" className={classes.ButtonSpace}>
                  加入收藏
                </Button>
                <Link
                  to={{
                    pathname: `/products2/${single}`,
                    state: {
                      p_sid: this.props.p_sid,
                    },
                  }}
                >
                  <Button
                    variant="primary"
                    className={classes.ButtonSpace2}
                    onClick={this.handleClick}
                  >
                    查看商品
                  </Button>
                </Link>
              </Card.Body>
            </Col>
          </div>
        </Card>
      </>
    )
  }
}

export default ProductsCard

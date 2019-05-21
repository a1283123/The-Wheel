// import Card from 'react-bootstrap/Card'
import React from 'react'
import classes from '../Products.module.css'
import { Container, Col, Row } from 'react-bootstrap'
// import { TweenMax } from 'gsap/all'
// import { Transition } from 'react-transition-group'
// import ContentPage from '../ContentPage/ContentPage'

// import { IoIosCart } from 'react-icons/io'
// import ControlledCarousel from './ControlledCarousel'
// import { IoIosHand } from 'react-icons/io'

class SingleImg extends React.Component {
  constructor(props) {
    super(props)
    // const product = this.props.product
    this.state = {}
  }
  render() {
    // const a = this.props.product
    // console.log('product', a[0])
    //console.log(a[0].quantity)

    return (
      <>
        <Container>
          <Row>
            <Col sm={10}>
              <div className={classes.imgGruops}>
                <img
                  // className="d-block w-100 "
                  className={classes.ProductsHight}
                  src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                  alt=""
                />
              </div>
            </Col>

            <Col sm={2}>
              <div className={classes.imgSmallGroups2}>
                <img
                  className={classes.imgSmallGroups}
                  style={{ width: '90%' }}
                  src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                  alt=""
                />
                <img
                  className={classes.imgSmallGroups}
                  style={{ width: '90%' }}
                  src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                  alt=""
                />
                <img
                  className={classes.imgSmallGroups}
                  style={{ width: '90%' }}
                  src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                  alt=""
                />
                <img
                  className={classes.imgSmallGroups}
                  style={{ width: '90%' }}
                  src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default SingleImg

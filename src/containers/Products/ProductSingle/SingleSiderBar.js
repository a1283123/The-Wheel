import React from 'react'
import classes from '../Products.module.css'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { IoIosCart } from 'react-icons/io'
import {
  Jumbotron,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Table,
} from 'react-bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
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
    // this.handleShow = this.handleShow.bind(this)
    // this.handleClose = this.handleClose.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      modal: false,
      product: this.props.product,
      cart: [],
      quantity: 0,
    }
  }

  componentDidMount = () => {
    console.log(this.props.product)
    //繼承每個商品的資料
  }
  // handleClose() {
  //   this.setState({ show: false })
  // }

  // handleShow() {
  //   this.setState({ show: true })
  // }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }
  addToCart = product => {
    let quantity = this.state.quantity
    if (quantity === 0) {
      alert('請選擇數量')
    } else {
      const cart = [...this.state.cart]
      const item = Object.assign({}, product, { quantity })
      cart.push(item)
      this.setState({
        cart,
      })
      console.log(cart)
    }
  }

  handleChange = event => {
    const quantity = this.state.quantity

    this.setState(
      {
        quantity: event.target.value,
      },
      () => console.log(this.state)
    )
  }

  render() {
    const { show, product } = this.state
    const { cart } = this.state.cart
    return (
      <>
        <Container fluid>
          <Row noGutters>
            <Col sm={2}>
              <div className={classes.productSideBarCart}>
                <h5
                  className={classes.productSideBarCart2}
                  onClick={this.toggle}
                >
                  {this.props.buttonLabel}
                  <IoIosCart size={25} />
                  購物車
                </h5>
              </div>
              <div className={classes.productSideBarGenre}>
                <p className={classes.productSideBarGenre2}>
                  {this.props.product.p_genre}/{this.props.product.p_genre2}
                </p>
              </div>
              <div className={classes.productSideBarBarnd}>
                <p className={classes.productSideBarBarnd2}>
                  {' '}
                  {this.props.product.p_brand}
                </p>
              </div>
            </Col>
            <Col sm={8}>
              <div className={classes.productSideBarPrice}>
                <Col className={classes.productSideBarPrice2}>
                  <h1>NT:{this.props.product.p_price}</h1>

                  <p>
                    {this.props.product.p_name}
                    {this.props.product.photos[0]}
                  </p>
                </Col>
                <Col sm={4} className={classes.productSideBarPrice3}>
                  <Form.Control
                    style={{ width: '8rem' }}
                    as="select"
                    onChange={this.handleChange}
                  >
                    <option selected value="null">
                      數量
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Control>
                </Col>
              </div>
            </Col>
            <Col className={classes.productSideBarButtonControl} sm={2}>
              <div>
                <Button className={classes.productSideBarButton}>
                  直接購買
                </Button>
              </div>
              <div>
                <Button
                  className={classes.productSideBarButton2}
                  // disabled={cart.find(item => item.p_id === product.p_id)}
                  color="secondary"
                  onClick={() => this.addToCart(product)}
                >
                  加入購物車
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
          <ModalBody>
            <Container fluid>
              <Row className="show-grid">
                <Col xs={1} md={2}>
                  <p>#</p>
                </Col>
                <Col xs={5} md={5}>
                  <p>商品名</p>
                </Col>
                <Col xs={4} md={3}>
                  <p>價格</p>
                </Col>
                <Col xs={2} md={2}>
                  <p>數量</p>
                </Col>
              </Row>
            </Container>

            <Row className="show-grid">
              <Col xs={1} md={2}>
                <p>
                  {this.state.cart.map((item, index) => (
                    <p>{item.p_sid}</p>
                  ))}
                </p>
              </Col>
              <Col xs={5} md={5}>
                {this.state.cart.map((item, index) => (
                  <p>{item.p_name}</p>
                ))}
              </Col>
              <Col xs={4} md={3}>
                {this.state.cart.map((item, index) => (
                  <p>{item.p_price}</p>
                ))}
              </Col>
              <Col>
                <p>
                  {this.state.cart.map((item, index) => (
                    <p>{item.quantity}</p>
                  ))}
                </p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              結帳
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              取消
            </Button>
          </ModalFooter>
        </Modal>
        {/* <Modal isOpen={this.state.show} toggle={this.toggle}>
          <ModalHeader closeButton>購物車</ModalHeader>
          <ModalBody>
            <Container fluid>
              <Row className="show-grid">
                <Col xs={1} md={2}>
                  <p>#</p>
                </Col>
                <Col xs={5} md={5}>
                  <p>商品名</p>
                </Col>
                <Col xs={4} md={3}>
                  <p>價格</p>
                </Col>
                <Col xs={2} md={2}>
                  <p>數量</p>
                </Col>
              </Row>
            </Container>

            <Row className="show-grid">
              <Col xs={1} md={2}>
                <p>#</p>
              </Col>
              <Col xs={5} md={5}>
                <p>{this.state.cart}</p>
              </Col>
              <Col xs={4} md={3}>
                <p>NT:{this.props.product.p_price}</p>
              </Col>
              <Col>
                <p>1</p>
              </Col>
            </Row>
          </ModalBody>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggle}>
              結帳
            </Button>
            <Button variant="primary" onClick={this.toggle}>
              取消
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    )
  }
}

export default SingleSiderBar

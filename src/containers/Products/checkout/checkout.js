import React from 'react'
import classes from './checkout.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import Card from 'react-bootstrap/Card'
// import ContentPage from '../ContentPage/ContentPage'
import {
  Button,
  Container,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const startState = { autoAlpha: 0, y: -50 }

class oder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      display: 'none',
      cart: [],
      isChecked: false,
    }
    this.handleChecked = this.handleChecked.bind(this)
  }
  componentDidMount(){
    if (!localStorage.getItem('cart')) {
      const cart = []
      cart.push()
      this.setState({
        cart,
      })

      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(this.state)
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push()
      this.setState({
        cart,
      })

      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
  handleChange = event => {
    if (event.target.value === '信用卡') {
      this.setState({
        display: 'block',
      })
    }
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  render() {
    let cart = []
    cart = JSON.parse(localStorage.getItem('cart'))
    console.log(this.state)
    var txt;
    if (this.state.isChecked) {
      txt = 'block'
    } else {
      txt = 'none'
    }

    return (
      <>
        <Container className={classes.OderCard} style={{ marginTop: '10rem' }}>
          <Card className={classes.OderCardTop}>
            <div className="row">
              {cart.map((item, index) => (
                <Col
                  md={7}
                  className={classes.CheckImg}
                  style={{ textAlign: 'center' }}
                >
                  <Card.Img
                    variant="top"
                    src={item.p_photo}
                    alt=""
                    style={{ width: '50%' }}
                  />
                  {console.log(item.p_photo)}
                </Col>
              ))}

              {cart.map((item, index) => (
                <Col md={5} style={{ padding: '20px' }}>
                  <Card.Title style={{ marginTop: '4rem' }}>
                    商品名:{item.p_name}
                  </Card.Title>
                  <Card.Text>商品車種:{item.p_genre}</Card.Text>
                  <Card.Text>商品品牌:{item.p_brand}</Card.Text>
                  <Card.Text>商品說明:{item.p_description}</Card.Text>
                  <Card.Text>數量:{item.quantity}</Card.Text>
                </Col>
              ))}
            </div>
            <Form style={{ padding: '15px' }}>
              <Form.Group as={Col} md={4} controlId="formGridState">
                <Form.Label>付款方式</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option selected>請選擇</option>
                  <option value="信用卡">信用卡</option>
                  <option value="貨到付款">貨到付款</option>
                  <option value="匯款">匯款</option>
                </Form.Control>
              </Form.Group>
              <div id="creditCard" style={{ display: `${this.state.display}` }}>
                <Form.Group as={Col} md={3}>
                  <Form.Label>卡號</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} md={1} controlId="formGridPassword">
                  <Form.Label>安全碼</Form.Label>
                  <Form.Control />
                </Form.Group>
              </div>

              <div>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Label as="legend" column sm={2}>
                    配送方式
                  </Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="宅配"
                    onChange={this.handleChecked}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="7-11寄送" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="郵局領取" />
                </Form.Group>
              </div>
              <div style={{ display: `${txt}` }}>
                <Form.Group as={Col} md={4}>
                  <Form.Label>地址</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} md={2} controlId="formGridState">
                  <Form.Label>城市</Form.Label>
                  <Form.Control as="select">
                    <option selected>選擇</option>
                    <option>台北市</option>
                    <option>新北市</option>
                    <option>桃園市</option>
                    <option>新竹市</option>
                    <option>高雄市</option>
                    <option>嘉義市</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </Form>
            <Container>
              <Row style={{ textAlign: 'right' }}>
                <Col>
                  <h1>NT:總價格</h1>
                </Col>
              </Row>
              <Row
                className={classes.checkButton}
                style={{ justifyContent: 'flex-end' }}
              >
                <Button className={classes.checkButton2}>下訂單</Button>
              </Row>
            </Container>
          </Card>

          {this.props.children}
        </Container>
      </>
    )
  }
}

export default oder

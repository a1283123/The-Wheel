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
    }
  }
  handleChange = event => {
    if (event.target.value === '信用卡') {
      this.setState({
        display: 'block',
      })
    }
  }

  render() {
    return (
      <>
        <Container className={classes.OderCard} style={{ marginTop: '10rem' }}>
          <Card className={classes.OderCardTop}>
            <div className="row">
              <Col
                md={7}
                className={classes.CheckImg}
                style={{ textAlign: 'center' }}
              >
                <Card.Img
                  variant="top"
                  src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
                  alt=""
                  style={{ width: '50%' }}
                />
              </Col>
              <Col md={5} style={{ padding: '20px' }}>
                <Card.Title style={{ marginTop: '4rem' }}>
                  商品名:XXXX
                </Card.Title>
                <Card.Text>商品車種:XXXXXX</Card.Text>
                <Card.Text>商品品牌:XXXXXXXX</Card.Text>
                <Card.Text>商品說明:XXXXXXXXXXXXXXXXXXX</Card.Text>
                <Card.Text>數量:XXXX</Card.Text>
              </Col>
            </div>
            <Form style={{ padding: '15px' }}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>付款方式</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: '70%' }}
                  onChange={this.handleChange}
                >
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
              <fieldset>
                <Form.Group>
                  <Form.Label as="legend" column sm={2}>
                    配送方式
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="宅配"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="7-11寄送"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="郵局領取"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
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

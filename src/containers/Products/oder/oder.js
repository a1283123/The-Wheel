import React from 'react'
import classes from './oder.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import Card from 'react-bootstrap/Card'
// import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row } from 'react-bootstrap'

const startState = { autoAlpha: 0, y: -50 }

class oder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
    }
  }

  render() {
    return (
      <>
        <Transition
          unmountOnExit
          in={this.props.show}
          timeout={1000}
          onEnter={node => TweenMax.set(node, startState)}
          addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
              autoAlpha: this.props.show ? 1 : 0,
              y: this.props.show ? 0 : 50,
              onComplete: done,
            })
          }}
        >
          <Container className={classes.OderCard}>
            <Card className={classes.OderCardTop}>
              <div className="row">
                <Col md={7} style={{ textAlign: 'center' }}>
                  <Card.Img
                    variant="top"
                    src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
                    alt=""
                    style={{ width: '50%' }}
                  />
                </Col>
                <Col md={5}>
                  <Card.Title style={{ marginTop: '4rem' }}>
                    商品名:XXXX
                  </Card.Title>
                  <Card.Text>商品車種:XXXXXX</Card.Text>
                  <Card.Text>商品品牌:XXXXXXXX</Card.Text>
                  <Card.Text>商品說明:XXXXXXXXXXXXXXXXXXX</Card.Text>
                  <Card.Text>數量:XXXX</Card.Text>
                  <Card.Text>付款方式:XXXXXXXXXXXXX</Card.Text>
                  <Card.Text>配送方式:XXXXXXXXXXXX</Card.Text>

                  <Card.Body>
                    <Card.Text className={classes.Space}>NT:XXXXXXXX</Card.Text>
                  </Card.Body>
                </Col>
              </div>
            </Card>
            <Card className={classes.OderCardTop}>
              <div className="row">
                <Col md={7} style={{ textAlign: 'center' }}>
                  <Card.Img
                    variant="top"
                    src="https://attach.mobile01.com/attach/201809/mobile01-cce4664dba207264b6b9eb925ca3694e.png"
                    alt=""
                    style={{ width: '50%' }}
                  />
                </Col>
                <Col md={5}>
                  <Card.Title style={{ marginTop: '4rem' }}>
                    商品名:XXXX
                  </Card.Title>
                  <Card.Text>商品車種:XXXXXX</Card.Text>
                  <Card.Text>商品品牌:XXXXXXXX</Card.Text>
                  <Card.Text>商品說明:XXXXXXXXXXXXXXXXXXX</Card.Text>
                  <Card.Body>
                    <Card.Text className={classes.Space}>NT:XXXXXXXX</Card.Text>
                  </Card.Body>
                </Col>
              </div>
            </Card>
            {this.props.children}
          </Container>
        </Transition>
      </>
    )
  }
}

export default oder

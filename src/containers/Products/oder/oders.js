import React from 'react'
import classes from './oder.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import Card from 'react-bootstrap/Card'
// import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row } from 'react-bootstrap'

const startState = { autoAlpha: 0, y: -50 }

class orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      id:null,
    }
 
  }

  
  // componentDidMount() {
    
  //   let id = []
  //   let id2=[]
  //   id = JSON.parse(localStorage.getItem('meber'))
  //   id2=id[0].id
  //   console.log(id2)
      
  //     fetch(`http://localhost:5000/orders/${id2}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         this.setState({ orders: data })
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
    
  // }



  render() {
  
    return (
      <>
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
           
         
          </Container>
      
      </>
    )
  }
}

export default orders

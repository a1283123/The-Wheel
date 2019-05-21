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

class SingleProductList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this)

    // console.log('product', a[0])
    //console.log(a[0].quantity)
    // console.log(this.props.match.params)
    return (
      <>
        <Container fluid>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <img
                className={classes.imgSmallGroups}
                style={{ width: '80%' }}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                alt=""
              />
            </Col>
            <Col style={{ textAlign: 'center' }}>
              <img
                className={classes.imgSmallGroups}
                style={{ width: '80%' }}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className={classes.productDescription}>
            <Col>
              <p>
                捷安特空力系統管形技術的要求是 :空氣動力自行車在風洞中的表現必須
                一如在公路上的表現，在研發全新PROPELDISC車架組
                的過程中，我們運用計算流體動力學及風洞測試設計
                出具有截尾橢圓形截面的全新管件造型，
                相較於傳統的水滴型車架管形，
                能夠再更廣的風向角度保有更低的正向風阻係數，
                首先我們透過ＣＦＤ分析了超過三百種的管件設計，
                接著在水流及風洞測試中進行管件形狀的實驗，
                最後在法國馬尼庫爾的ACE風洞實驗室進行整個系統
                一包括:車架.前叉.上部零件及輪組系統一的最終完善
              </p>
            </Col>
            <Col>
              <p>
                捷安特空力系統管形技術的要求是 :空氣動力自行車在風洞中的表現必須
                一如在公路上的表現，在研發全新PROPELDISC車架組
                的過程中，我們運用計算流體動力學及風洞測試設計
                出具有截尾橢圓形截面的全新管件造型，
                相較於傳統的水滴型車架管形，
                能夠再更廣的風向角度保有更低的正向風阻係數，
                首先我們透過ＣＦＤ分析了超過三百種的管件設計，
                接著在水流及風洞測試中進行管件形狀的實驗，
                最後在法國馬尼庫爾的ACE風洞實驗室進行整個系統
                一包括:車架.前叉.上部零件及輪組系統一的最終完善
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ marginTop: '5rem' }}>
          <Row>
            <Col
              style={{ textAlign: 'center' }}
              className={classes.productDescriptionImg}
            >
              <img
                className={classes.productDescriptionImg}
                style={{ width: '70%' }}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
                alt=""
              />
            </Col>
            <Col className={classes.productDescription2}>
              <div className={classes.productDescription3}>
                <p>
                  捷安特空力系統管形技術的要求是
                  :空氣動力自行車在風洞中的表現必須
                  一如在公路上的表現，在研發全新PROPELDISC車架組
                  的過程中，我們運用計算流體動力學及風洞測試設計
                  出具有截尾橢圓形截面的全新管件造型，
                  相較於傳統的水滴型車架管形，
                  能夠再更廣的風向角度保有更低的正向風阻係數，
                  首先我們透過ＣＦＤ分析了超過三百種的管件設計，
                  接著在水流及風洞測試中進行管件形狀的實驗，
                  最後在法國馬尼庫爾的ACE風洞實驗室進行整個系統
                  一包括:車架.前叉.上部零件及輪組系統一的最終完善
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default SingleProductList

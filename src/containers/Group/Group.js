import React from 'react'
import classes from '../Products/Products.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row, Carousel , Form} from 'react-bootstrap'
import { IoIosHeart, IoIosCart } from 'react-icons/io'
import ProductsSearch from '../Products/ProductsSearch'
import ProductsCard from '../Products/ProductsCard'
import ProductControlledCarousel from '../Products/ProductControlledCarousel'
// import ControlledCarousel2 from './ControlledCarousel2'

const startState = { autoAlpha: 0, y: -50 }

class group extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:5555/product')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ product: data })
      })
      .catch(err => {
        console.log(err)
      })
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
        
          <div >
          <Container>
            <Row>
            <Col sm={10}>
            <div className={classes.imgGruops}>
          <img  className="d-block w-100  "
                className={classes.ProductsHight}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
            />
            </div>
            </Col>
           
            <Col sm={2}>
            <div className={classes.imgSmallGroups2}>
            <img classNmae={classes.imgSmallGroups}
                style={{'width':'90%'}}
            src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
                     <img classNmae={classes.imgSmallGroups}
                style={{'width':'90%'}}
            src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
                     <img classNmae={classes.imgSmallGroups}
                style={{'width':'90%'}}
            src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
                     <img classNmae={classes.imgSmallGroups}
                style={{'width':'90%'}}
            src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
             </div>
            </Col>    
            </Row>          
             </Container>               
            <div>
              <Button className={classes.productButton}>
                <IoIosHeart size={25} />
                加入收藏
              </Button>
            </div>
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
            <Container fluid>
              <Row>
              <Col style={{'text-align': 'center'}}>
              <img classNmae={classes.imgSmallGroups}
                style={{'width':'80%'}}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
              </Col>
              <Col  style={{'text-align': 'center'}}>
              <img classNmae={classes.imgSmallGroups}
                style={{'width':'80%'}}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
              </Col>
              </Row>
            </Container>
            <Container fluid>
            <Row className={classes.productDescription}>
            <Col >
              <p >捷安特空力系統管形技術的要求是
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
              </Col>
              <Col>
              <p >捷安特空力系統管形技術的要求是
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
              </Col>

            </Row>
            
            </Container>
            <Container fluid style={{'margin-top': '5rem'}}>
              <Row>
              <Col  style={{'text-align': 'center'}} classNmae={classes.productDescriptionImg}>
              <img classNmae={classes.productDescriptionImg}
                style={{'width':'70%'}}
                src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png" 
                    />
              </Col>
              <Col className={classes.productDescription2}>
              <div className={classes.productDescription3}>
              <p>捷安特空力系統管形技術的要求是
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

            <ProductControlledCarousel />


            {this.props.children}
              </div>
        </Transition>
      </>
    )
  }
}

export default group


import React from 'react'
import classes from './Products.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row, Carousel } from 'react-bootstrap'
import { IoIosCart } from 'react-icons/io'
import ControlledCarousel from './ControlledCarousel'
import ProductsSearch from './ProductsSearch'
import ProductsCard from './ProductsCard'
import ControlledCarousel2 from './ControlledCarousel2'

const startState = { autoAlpha: 0, y: -50 }

class productsPages extends React.Component {
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
    let list = null
    let Carousel = null
    if (this.state.product) {
      list = this.state.product.map(item => {
        return (
          <ProductsCard
            style={{ border: '1px solid black' }}
            pic={item.p_photo}
            name={item.p_name}
            description={item.p_description}
            price={item.p_price}
          />
        )
      })
    }
 
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
          <div>
               <ControlledCarousel />
            <div>
              <Button className={classes.Button}>
                <IoIosCart size={25} />
                購物車
              </Button>
            </div>
            <Container className={classes.SearchSideBar}>
              <Row>
                <Col lg={3}>
                  <ProductsSearch />
                </Col>
                <Col lg={9}>
                  {/* <ProductsCard product={this.state.product} /> */}
                  {list}
                </Col>
              </Row>
            </Container>

            {this.props.children}
          </div>
        </Transition>
      </>
    )
  }
}

export default productsPages



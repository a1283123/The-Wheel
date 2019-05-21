import React from 'react'
import classes from '../Products'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
// import ContentPage from '../../ContentPage/ContentPage'
import { Button } from 'react-bootstrap'
import { IoIosHeart } from 'react-icons/io'
import ProductControlledCarousel from '../ProductControlledCarousel'
// import ControlledCarousel2 from './ControlledCarousel2'
import SingleImg from './SingleImg'
import SingleSiderBar from './SingleSiderBar'
import SingleProductList from './SingleList'
const startState = { autoAlpha: 0, y: -50 }

class ProductSinglePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      p_sid: this.props.p_sid,
    }
  }

  componentDidMount() {
    let p_sid = this.props.p_sid

    // const newproject = this.state.product[0]
    fetch(`http://localhost:5555/product/${p_sid}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ product: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const aa = this.props.p_sid
    console.log(aa)
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
            <SingleImg />
            <div>
              <Button className={classes.productButton}>
                <IoIosHeart size={25} />
                加入收藏
              </Button>
            </div>
            <SingleSiderBar />
            <SingleProductList />
            <ProductControlledCarousel />

            {this.props.children}
          </div>
        </Transition>
      </>
    )
  }
}

export default ProductSinglePage

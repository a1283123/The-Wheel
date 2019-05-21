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
import SingleProductList from './SingleProductList'
import {withRouter} from 'react-router-dom'
const startState = { autoAlpha: 0, y: -50 }

class ProductSinglePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:null,
     product:null,
    }
  }

  componentDidUpdate(prevporps,prevState) {
    console.log(this.props)
      if(!this.state.product ){
    let p_sid = this.state.id

    // const newproject = this.state.product[0]
    fetch(`http://localhost:5555/product/${p_sid}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data[0] })
      })
      .catch(err => {
        console.log(err)
      })}
      
  }

  componentDidMount(){
    let p_sid = this.props.history.location.pathname.slice(11)
    console.log("mount")
    this.setState(
      {
        id:p_sid,
      })
    //  fetch(`http://localhost:5555/product/${p_sid}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ product: data[0] })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
  
//把值傳進去

  render() {
      let list2 =null
      let list3 = null
      if(this.state.product){
        console.log(this.state.product)
        list2 =  <SingleSiderBar
        
        product={this.state.product}
      />
      list3= <SingleProductList 
      
      product={this.state.product}
      />
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
            <SingleImg />
            <div>
              <Button className={classes.productButton}>
                <IoIosHeart size={25} />
                加入收藏
              </Button>
            </div>
            {/* <SingleSiderBar /> */}
              {list2}
              {list3}
            <ProductControlledCarousel />

            {this.props.children}
          </div>
        </Transition>
      </>
    )
  }
}

export default withRouter(ProductSinglePage)
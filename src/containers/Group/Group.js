import React from 'react'
import classes from '../Products/Products.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row, Carousel , Form} from 'react-bootstrap'
import { IoIosHeart, IoIosCart } from 'react-icons/io'
import ProductsSearch from '../Products/ProuductSearch/ProductsSearch'
import ProductsCard from '../Products/ProductsCard'
import ProductControlledCarousel from '../Products/ProductControlledCarousel'
// import ControlledCarousel2 from './ControlledCarousel2'
import SingleImg from '../Products/ProductSingle/SingleImg'
import SingleSiderBar from '../Products/ProductSingle/SingleSiderBar'
import SingleProductList from '../Products/ProductSingle/SingleProductList'
const startState = { autoAlpha: 0, y: -50 }

class group extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      p_name:[],
      id:'',
    }
  }

  // componentDidMount() {
    // let id = this.props.match.params.id;
    // console.log(id)
  //   const newproject = this.state.product[0]
  //   fetch(`http://localhost:5555/product/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({ product: data })
  //     })
  //     .then(data => {
  //       console.log(data)
  //       this.setState({ p_name: newproject.p_name,
  //                   p_size: newproject.p_size,
  //                   p_description:newproject.p_description,
  //                   p_price:newproject.p_price,
  //                   p_genre:newproject.p_genre,
  //                   p_genre2:newproject.p_genre2,
  //                   p_brand:newproject.p_brand,
  //                   p_color:newproject.p_color
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

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
            <SingleImg/>
            <div>
              <Button className={classes.productButton}>
                <IoIosHeart size={25} />
                加入收藏
              </Button>
            </div>
            <SingleSiderBar/>
           <SingleProductList/>
            <ProductControlledCarousel />


            {this.props.children}
              </div>
        </Transition>
      </>
    )
  }
}

export default group


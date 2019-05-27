import React from 'react'
import classes from './Products.module.css'
import { TweenMax } from 'gsap/all'
import { Transition } from 'react-transition-group'
// import ContentPage from '../ContentPage/ContentPage'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { IoIosCart } from 'react-icons/io'
import ControlledCarousel from './ConteolledCarousel/ControlledCarousel'
import ProductsSearch from '../Products/ProuductSearch/ProductsSearch'
import ProductsCard from '../Products/ProductsCard'
import ControlledCarousel2 from './ControlledCarousel2'

const startState = { autoAlpha: 0, y: -50 }

class products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: [],
      type: null,
      genre: null,
      filter: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ product: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate() {}
  //搜尋欄位 改變state裡面的值

  //改變Search車種的值
  handleType = event => {
    this.setState(
      {
        type: event.target.value,
      },
      () => console.log(this.state.type)
    )
  }
  //改變Search部件的值
  handleGenre = event => {
    this.setState(
      {
        genre: event.target.value,
      },
      () => console.log(this.state.genre)
    )
  }
  //改變Search Input的值
  handleInput = event => {
    this.setState(
      {
        filter: event.target.value,
      },
      () => console.log(this.state.filter)
    )
  }
  //點擊搜尋按鈕fetch get 的資料
  handleSearch = props =>{
    console.log(decodeURI(props))
    var paramsString = props
    var searchParams = new URLSearchParams(paramsString)
      //抓到網址列上的車種
     let type =  searchParams.get("type")
      //抓到網址列上的部件    
      let genre = searchParams.get("genre")
      //抓到網址上的filter
      let filter= searchParams.get("filter")
    var obj ={
      type:searchParams.get("type"),
      genre: searchParams.get("genre"),
      filter:searchParams.get("filter"),
    }
    fetch('http://localhost:5000/search',{
      method:'POST',
      body: JSON.stringify(obj)
      }).then(res => res.json())
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
    if (this.state.product) {
      list = this.state.product.map(item => {
        return (
          <ProductsCard
            style={{ border: '1px solid black' }}
            pic={item.p_photo}
            name={item.p_name}
            description={item.p_description}
            price={item.p_price}
            p_sid={item.p_sid}
            // onClick={() => {
            //   this.SingleProduct(item['p_sid'])
            // }}
          />
        )
      })
    }
    //   Carousel = this.state.product.map(item => {
    //     console.log(item)
    //     return (
    //       <ControlledCarousel
    //         pic={item.p_photo}
    //         name={item.p_name}
    //         description={item.p_description}
    //         price={item.p_price}
    //       />
    //     )
    //   })
    // }
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
                  <ProductsSearch
                    handleType={this.handleType}
                    handleGenre={this.handleGenre}
                    handleInput={this.handleInput}
                    handleSearch={this.handleSearch}
                  />
                </Col>
                <Col lg={9}>
                  {/* <ProductsCard product={this.state.product} /> */}
                  {list}
                </Col>
              </Row>
            </Container>

            {/* {this.props.children} */}
          </div>
        </Transition>
      </>
    )
  }
}

export default products

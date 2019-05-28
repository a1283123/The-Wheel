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
      page: 0,
    }
  }

  componentDidMount = page => {
    page = this.state.page
    this.setState({ page: page + 1 })
    fetch('http://localhost:5000/product?page=' + page)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        let products = [...this.state.product]
        // console.log(products)
        this.setState({ product: [...this.state.product, ...data] })
        console.log(this.state.product)
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
  handleSearch = props => {
    //  console.log(this.state.type)

    var obj = {
      type: this.state.type,
      genre: this.state.genre,
      filter: this.state.filter,
    }
    console.log(obj)
    fetch('http://localhost:5000/search', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ product: data }, () => {
          this.setState({
            type: null,
            genre: null,
            filter: null,
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  handleMore = page => {
    page = this.state.page
    this.setState({ page: page + 1 })
    fetch('http://localhost:5000/product?page=' + page)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        let products = [...this.state.product]
        // console.log(products)
        this.setState({ product: [...this.state.product, ...data] })
        console.log(this.state.product)
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
            key={item.p_sid}
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
                <Col lg={9} style={{ marginBottom: '5rem' }}>
                  {/* <ProductsCard product={this.state.product} /> */}
                  {list}
                </Col>
              </Row>
            </Container>
            <div
              className={classes.MoreButton}
              style={{ textAlign: 'center', marginBottom: '100px' }}
            >
              <Button className={classes.MoreButton2} onClick={this.handleMore}>
                更多商品
              </Button>
            </div>

            {/* {this.props.children} */}
          </div>
        </Transition>
      </>
    )
  }
}

export default products

import React from 'react'
import classes from './Products.module.css'
import { Button, Container, Col, Row, Carousel } from 'react-bootstrap'
import photo from './picture/bike.png'
class CarouselPhoto extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      index: 0,
      direction: null,
      product: [],
    }
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    })
  }
  render() {
    const { index, direction } = this.state
    console.log(this.props)
    return (
      <>
        {/* <Carousel.Item */}
        {/* style={{ 'text-align': 'center' }}
        // style={{ display: 'block' }}
        > */}
        <img
          style={{ 'text-align': 'center' }}
          className="d-block w-100  "
          className={classes.imgHeight}
          src={photo}
          alt="First slide"
          style={{ 'object-fit': 'contain' }}
        />
        <p>{this.props.name}</p>
        {/* </Carousel.Item> */}
      </>
    )
  }
}

export default CarouselPhoto

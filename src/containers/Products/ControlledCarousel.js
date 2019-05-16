import React from "react";
import classes from "./Products.module.css";
import { Button, Container, Col, Row, Carousel } from 'react-bootstrap';





class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <>
        <h3>First slide label</h3>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          className={classes.Carousel}
          style={{height:'500px'}}
        >
          <Carousel.Item style={{'text-align':'center'}}>
          

             
            <img
              className="d-block w-100  "
              className={classes.imgHeight}
              src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
              alt="First slide"
              style={{'object-fit': 'contain'}}
            />
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           
          </Carousel.Item>
          <Carousel.Item style={{'text-align':'center'}}>
         
    
        <img
          className="d-block w-100"
          className={classes.imgHeight}
          src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
          alt="First slide"
          style={{'object-fit': 'contain'}}
          
        />
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item style={{'text-align':'center'}}>
        <img
          className="d-block w-100"
          className={classes.imgHeight}
          src="http://www.sportslab.com.tw/image/member/album/resize/623/629/1504596555497.png"
          alt="First slide"
          style={{'object-fit': 'contain'}}
          
        />
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
        </Carousel>
        </>
      );
    }
  }
  
 
  export default ControlledCarousel
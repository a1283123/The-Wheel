
import Card from 'react-bootstrap/Card'
import React from "react";
import classes from "./Products.module.css";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import ContentPage from "../ContentPage/ContentPage";
import { Button, Container, Col, Row, Carousel,Form } from 'react-bootstrap';
import { IoIosCart } from "react-icons/io";
import ControlledCarousel from './ControlledCarousel'
import { IoIosHand } from "react-icons/io";




class ProductsSearch extends React.Component {

    render() {
      return (
      <>
  
      <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="搜尋"  /><IoIosHand/>
              <Form.Label>車種</Form.Label>
              <Form.Control as="select">
                <option>公路車</option>
                <option>特技車</option>
                <option>單速車</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>部件</Form.Label>
              <Form.Control as="select">
                <option>全車</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit"  className={classes.SearchButton}>
              搜尋
            </Button>
        </Form>
      </>
      )
    }
  }
  
  export default ProductsSearch


 
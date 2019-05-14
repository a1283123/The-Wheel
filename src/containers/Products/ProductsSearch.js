
import Card from 'react-bootstrap/Card'
import React from "react";
import classes from "./Products.module.css";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import ContentPage from "../ContentPage/ContentPage";
import { Button, Container, Col, Row, Carousel } from 'react-bootstrap';
import { IoIosCart } from "react-icons/io";
import ControlledCarousel from './ControlledCarousel'




class ProductsSearch extends React.Component {

    render() {
      return <>
<Card>
    <Card.Body>
        <input></input>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>;
      </>
    }
  }
  
  export default ProductsSearch
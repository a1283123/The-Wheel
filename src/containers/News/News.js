import React from "react";
import classes from "./News.module.css";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import ContentPage from "../ContentPage/ContentPage";
import NewsLists from "./NewsLists/NewsLists";
import PopularNews from "./PopularNews/PopularNews"

const startState = { autoAlpha: 0, y: -50 };

class News extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showPopular : false
    }
  }

  componentDidMount(){
    
  }

  toggleList = (e) => {
    if(e.target.value === "false"){
      this.setState({showPopular: false});
    }else{
      this.setState({showPopular: true});
    }  
  }
  

  render(){
    console.log(this.props);
  return (
  <Transition
    unmountOnExit
    in={this.props.show}
    timeout={1000}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={ (node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: this.props.show ? 1 : 0,
        y: this.props.show ? 0 : 50,
        onComplete: done
      });
    }}
  >     
  
  <div className={classes.News}>
    <div className={classes.Mask}></div>
    <ContentPage scrollTop={this.props.percentage}>
    <div className={classes.Control}>
      <button onClick={this.toggleList} value={false}>所有文章</button>
      <button onClick={this.toggleList} value={true}>熱門文章</button>
    </div>
    
      {this.state.showPopular
      ? <PopularNews/>
      :<NewsLists show={this.props.show}/>}
       
      
     
    </ContentPage>  
   
  </div>
  </Transition>
  )
  }
};

export default News;

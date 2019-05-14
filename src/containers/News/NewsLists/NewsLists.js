import React from "react";
import Button from "../../../components/Button/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewsList from "../../../components/NewsList/NewsList";
import FullArticle from "../../FullArticle/FullArticle";
import { TweenMax, Power4, TimelineLite } from "gsap/all"
import { Route, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { fetchPosts, morePosts } from "../../../store/newsActions";
import "./NewsLists.module.css";


class NewsLists extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentShow: false,
      selected: ""
    };
    this.tl = new TimelineLite();
  }

  componentDidMount(prevProps){
    this.setState({currentShow: true});
    if(this.props.newsLists.length !== +this.props.page * 7){
    this.props.dispatch(fetchPosts(this.props.page));
    }
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("update");
    const callback = (entries) => {
      console.log("callback");
      entries.forEach(entry => {
                
        if(entry.intersectionRatio >= 0.3){
          
         TweenMax.to(entry.target, 1.5, {
           y: 0,
           autoAlpha: 1,
           
           ease: Power4.easeOut
         });
        }
      });
    }

    const observer = new IntersectionObserver(callback,{
      root: null,
      threshold: 0.3
    })
    let lists = document.querySelectorAll(".lists");
    lists.forEach(list => observer.observe(list) );
    console.log(lists);
    if(this.props.page !== prevProps.page){
      
      this.props.dispatch(fetchPosts(this.props.page));
    }
   
  }
  

  moreArticle = () => {
    
    this.props.dispatch(morePosts(this.props.page))
  }

  fullArticleHandler = (index) => {
    // console.log(this.props.newsLists);
    let selected = this.props.newsLists[index];
    this.setState({selected});
    this.props.history.push("/news/" + index);
  }

 
  render(){
    
    let lists = null;
    let sizes = [4, 4, 4, 4, 8, 8, 4];
    let keyNum = 0
    if(this.props.newsLists){
      lists = this.props.newsLists.map( (list, index) => {
         keyNum =  keyNum + 1;
        //  console.log(keyNum);
        return <NewsList title={list["title"]} 
                         text={list["text"]}
                         key={ keyNum + list["sid"]}
                         sid={list["sid"]}
                         size={sizes[index % 7]}  
                         onClick={() => {this.fullArticleHandler(index)}}
                         />
      })
      lists.push(<Button key={this.props.page} btnName="LOAD MORE"
        onClick={this.moreArticle}
      />)
    }
    return (
      <React.Fragment>
     
        
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <h2>文章列表</h2>
            </Col>
            {lists}
          </Row>
        
    
        <Route path="/news/:id" exact render={()=> <FullArticle 
        selected={this.state.selected}
        />}/>
    
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.news.isFetching,
    newsLists: state.news.newsLists,
    page: state.news.page,
  };
};

export default connect(mapStateToProps)(withRouter(NewsLists));
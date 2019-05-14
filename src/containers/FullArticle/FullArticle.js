import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./FullArticle.module.css";

class Fullarticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.article = React.createRef();
    this.back = React.createRef();
  }

  componentDidMount() {
    console.log("fullmount");
    console.log(document.body.offsetHeight);
    window.scrollTo(0, 0);
    this.back.current.addEventListener("click", this.closeFull);
    this.setState({ isOpen: true });
    document.body.style.overflow = "hidden";
  }

  closeFull = event => {
   
    if (event.target.id === "back") {
      this.setState({ isOpen: false });
      document.body.style.overflow = "auto";
      this.props.history.push("/news");
    }
  };

  render() {
    const { selected } = this.props;
    let endPoint = selected.text.indexOf("</figure>") + 9;
    let figure = selected.text.slice(0, endPoint);
    let text = selected.text.slice(endPoint);
    let title = selected.title;
    let commentList = (
      <div className={classes.Comment}>
        <p>目前沒有留言</p>
      </div>
    );
    if (selected.comment) {
      let comments = JSON.parse(selected.comment);
      commentList = comments.map((comment, index) => {
        return (
          <div key={"c" + index}>
            <div className={classes.Comment}>
              <p>{comment.text}</p>
            </div>
            {comment.reply ? (
              <div className={classes.Reply}>
                <p>作者回覆:</p>
                <p>{comment.reply}</p>
              </div>
            ) : null}
          </div>
        );
      });
    }
    // console.log(comments);
    // let bodyHeight = document.body.offsetHeight;
    // let articleHeight = this.article.current.offsetHeight;
    // let backHeight = 0;
    // if(articleHeight > bodyHeight){

    //  backHeight = articleHeight;
    // }else{

    //   backHeight = bodyHeight;
    // }
    return (
      <React.Fragment>
        <div className={classes.Panel}>
          <div>views</div>
          <div>like</div>
          <div>share</div>
        </div>
        <div
          id="back"
          className={classes.Full}
          ref={this.back}
          // style={{ minHeight: document.body.offsetHeight }}
        >
          <div className={classes.Article} ref={this.article}>
            <div>
              <h1>{title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: figure }} />
            <div dangerouslySetInnerHTML={{ __html: text }} />
            {commentList}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Fullarticle);

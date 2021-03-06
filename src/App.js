import React, { Component } from 'react'
// import Loading from "./components/LoadingAnimation/Loading";
import Nav from './components/Nav/Nav'
import Main from './containers/Main/Main'
import Routes from './containers/Route/Route'
import Group from './containers/Group/Group'
import Coach from './containers/Coach/Coach'
import News from './containers/News/News'
import Products from './containers/Products/Products'
import SingleProduct from './containers/Products/ProductSingle/ProductSinglePage'
import Footer from './containers/Footer/Footer'
import { isLoading } from './store/loadingActions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import orders from './containers/Products/oder/orders'
import checkout from './containers/Products/checkout/checkout'
// import ordersCard from './containers/Products/oder/ordersCard'
import './App.css'
const routes = [
  // { path: '/', name: 'Home', Component: Main },
  { path: '/route', name: 'About', Component: Routes },
  { path: '/group', name: 'Contact', Component: Group },
  { path: '/coach', name: 'Contact', Component: Coach },
  { path: '/news', name: 'Contact', Component: News },
  { path: '/products', name: 'Contact', Component: Products },
  { path: `/products2/:id`, Component: SingleProduct },
  { path: '/orders/:id', name: 'Contact', Component: orders },
  { path: '/checkout', name: 'Contact', Component: checkout },
  // { path: '/ordersCard', name: 'Contact', Component: ordersCard },
]

class App extends Component {
  componentDidMount() {
    setTimeout(() => this.props.dispatch(isLoading()));
  }

  render() {
    const { isLoading, isAnimated } = this.props;

    // return isLoading || !isAnimated ? (
    //   <Loading {...this.props} />
    // ) :
    return (
      <Router>
        <div>
          <Nav {...this.props} />
          <Switch>
            <Route path="/" exact component={Main} />
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <Component {...this.props} show={match !== null} />
                )}
              </Route>
            ))}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loading.isLoading,
    isAnimated: state.loading.isAnimated
  };
};

export default connect(mapStateToProps)(App);

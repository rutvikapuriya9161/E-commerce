import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import ProductList from './Container/ProductList/ProductList';
import ProductDetail from './Container/ProductDetail/ProductDetail';
import Contact from './Container/Contact/Contact';
import Blog from './Container/Blog/Blog';
import Login from './Container/Login/Login';
import ProductCheckout from './Container/ProductCheckout/ProductCheckout';
import ShopingCart from './Container/ShopingCart/ShopingCart';
import Confirmation from './Container/Confirmation/Confirmation';
import Elements from './Container/Elements/Elements';
import SingleBlog from './Container/SingleBlog/SingleBlog';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import PublicRoute from './Route/PublicRoute';
import ToggleThemeContext from './Context/ThemeContext';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToggleThemeContext>
          <Header />

          <Switch>
            <PublicRoute path={"/"} exact component={Home} />
            <PublicRoute path={"/About"} exact component={About} />
            <PublicRoute path={"/ProductList"} exact component={ProductList} />
            <PublicRoute path={"/ProductDetail"} exact component={ProductDetail} />
            <PublicRoute path={"/Login"} exact component={Login} />
            <PublicRoute path={"/ProductCheckout"} exact component={ProductCheckout} />
            <PublicRoute path={"/ShopingCart"} exact component={ShopingCart} />
            <PublicRoute path={"/Confirmation"} exact component={Confirmation} />
            <PublicRoute path={"/Elements"} exact component={Elements} />
            <PublicRoute path={"/Contact"} exact component={Contact} />
            <PublicRoute path={"/Blog"} exact component={Blog} />
            <PublicRoute path={"/SingleBlog"} exact component={SingleBlog} />
          </Switch>

          <Footer />
        </ToggleThemeContext>
      </Provider>

    </div>
  );
}

export default App;

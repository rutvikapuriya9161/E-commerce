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

function App() {
  return (
    <div>
      <Header />
     
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/About"} exact component={About} />
        <Route path={"/ProductList"} exact component={ProductList} />
        <Route path={"/ProductDetail"} exact component={ProductDetail} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={"/ProductCheckout"} exact component={ProductCheckout} />
        <Route path={"/ShopingCart"} exact component={ShopingCart} />
        <Route path={"/Confirmation"} exact component={Confirmation} />
        <Route path={"/Elements"} exact component={Elements} />
        <Route path={"/Contact"} exact component={Contact} />
        <Route path={"/Blog"} exact component={Blog} />
        <Route path={"/SingleBlog"} exact component={SingleBlog} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

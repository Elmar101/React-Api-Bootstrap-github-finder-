import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <p> Header Hisse</p>
)
const Navbar = () => (

    <nav>
        <NavLink to="/" activeClassName="active" exact> Home </NavLink>|
        <NavLink exact to="/contact" activeClassName="active"> Contact </NavLink>|
        <NavLink to="/contact/email#email" activeClassName="active"> Email </NavLink>|
        <NavLink to="/product" activeClassName="active" exact> Product </NavLink>|
        <NavLink to="/product/12?order=asc" activeClassName="active"> ProductDetail </NavLink>
       
    </nav>

)

const Footer = () => (
    <p> Footer Hisse</p>
)
const Home = () => (
    <>
        <h1>Esas Seyfe </h1>
    </>
)
const Contact = () => (
    <>
        <h1>Elaqe Seyfe </h1>
    </>
)

const Email = (props) => { 
    console.log(props);
    return (
        <>
            <h1>Email Seyfe </h1>
        </>
    )
}

const Product = () => (
    <>
        <h1>Mehsul Seyfe </h1>
    </>
)

const ProductsDetail = (props) => {
    console.log(props);
    return (
        <>
            <h1>Mehsulun Detaylari Seyfe </h1>
        </>
    )
}

const NotFound = () => (
    <>
        <h1>404 Seyfe </h1>
    </>
)

const router = (
    <BrowserRouter>
        <Header/>
        <Navbar />

        <Switch>
            <Route path='/' component={Home} exact/>
            <Route exact path='/contact' component={Contact} />
            <Route path='/contact/:email' component={Email} />
            <Route exact path='/product' component={Product} />
            <Route path='/product/:id' component={ProductsDetail} />
            <Route component={NotFound} />
        </Switch>
        
        <Footer/>
    </BrowserRouter>
);

const AppRouter = () => router;

export default AppRouter;

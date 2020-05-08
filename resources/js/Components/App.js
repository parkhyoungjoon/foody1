import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
import Auth from './Auth/Auth';
import Search from './Search/Search';
import Product from './ViewProd/Product';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <>
                    <GlobalStyles />
                    <Header />
                    <Switch>
                        <Route exact path ="/" component={Home} />
                        <Route path ="/search" component={Search} />
                        <Route path ="/login" component={Auth} />
                        <Route path ="/regist" component={Auth} />
                        <Route path ="/searchProduct/:id" component={Product} />
                        {/* <Route path ="/sell/:id" component={sell} /> */}
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;


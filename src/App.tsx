import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PricingPage } from './pages/PricingPage';
import { SignupPage } from './pages/SignupPage';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/pricing' component={PricingPage} />
      </Switch>
    </Router>
  );
}

export default App;

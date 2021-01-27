import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Gift from './components/Gift';
import Footer from './components/Footer';

const App = () => {
  const gifts = useSelector(state => {
    localStorage.setItem('gifts', JSON.stringify(state.gifts));
    return state.gifts;
  });

  return (
    <Container>
      <Header />
      <AddProduct />
      <Grid style={{marginTop: 20}} columns={3}>
        <Grid.Row>
          {gifts && (
            gifts.map(gift => (
              <Grid.Column key={gift.id}>
                <Gift 
                  gift={gift}
                />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
      <Footer />
    </Container>
  )
}

export default App;

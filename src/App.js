import React, { useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Gift from './components/Gift';
import Footer from './components/Footer';

const App = () => {
  const [gifts, setGifts] = useState([]);

  const deleteGift = (id) => {
    setGifts(gifts.filter(gift => gift.id !== id));
  }

  console.log(gifts);

  return (
    <Container>
      <Header />
      <AddProduct 
        gifts={gifts}
        setGifts={setGifts}
      />
      <Grid style={{marginTop: 20}} columns={3}>
        <Grid.Row>
          {gifts && (
            gifts.map(gift => (
              <Grid.Column key={gift.id}>
                <Gift 
                  gift={gift} 
                  deleteGift={deleteGift}
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

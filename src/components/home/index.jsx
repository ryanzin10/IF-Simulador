import Header from '../header';
import './src/home.css'
import { Fragment } from 'react';

const Home = () => {
  return(
    <Fragment>
      <Header/>

      <div className="options">
        <div className="option">
          <div className="title"><h3>Prova 2010</h3></div>
          <div className="description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus sunt magnam assumenda perspiciatis.</p></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
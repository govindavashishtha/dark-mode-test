import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import '../../../styles/_dark-mode.scss';
import {useSelector, useDispatch} from 'react-redux';
import { setIsDarkMode } from '../../../redux/actions';

function App() {

  /*For only changing the appearance from dark to light or light to dark in 
    a particular screen (not the whole app) we can use component's state only 
    with the help of useState and can change its value.
    For a wider application we need to get data from a core storage such as Redux that I have used here
  */


  // read and assign state's isDark to this component
  const isDark = useSelector(state => state.isDark);

  // initializing dispatch
  const dispatch =  useDispatch();

  // function to change the theme
  const changeMode = ()=>{
    //fires the setIsDarkMode function and sets new value to REDUX
    dispatch(setIsDarkMode(!isDark));
  }
  return (
    <div className={isDark ? "dark-mode" : "app"}>
      <div className="level">
        <div>
         <h1 className= "title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button onClick={()=>{
          changeMode();
        }} className="app__dark-mode-btn icon level-right">
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} color = {isDark ? "#FFA500" : "#000000"}/>
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Popular from '../components/pages/Popular'
import EndDate from '../components/pages/EndDate'
import './Tabs.css';

const TAB_DATA = [
   ["Newest" ],
   ["Popular", <Popular/>],
   ["End Date", <EndDate/>],
  ];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    }
  }
  clickHandler = (e) => {
    this.setState({
      active: parseInt(e.currentTarget.attributes.num.value)
    })
  }
  
  render() {
    let content = "";
    const tabs = TAB_DATA.map(([label, text], i) => {
      content = this.state.active === i ? text : content;  
      return <li 
               className={this.state.active === i ? "tab active" : "tab" } 
               key={label} 
               num={i}
               onClick={this.clickHandler}>
        {label}
      </li>;
    });
    
    return ( 
      <section className="tabs">
        <menu>
          <ul>
            {tabs}
          </ul>
        </menu>
        <div>
          {content}
        </div>
      </section>);
  }
}
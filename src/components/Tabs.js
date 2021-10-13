import React, { Component } from 'react';
import './Tabs.css';
import Newest from '../components/pages/Newest'

const TAB_DATA = [
   ["Newest", ],
   ["Popular", "Curabitur in augue erat. Vestibulum in fermentum ante, sit amet consectetur neque. Maecenas tempor nisl sollicitudin, blandit sapien ut, fermentum metus."],
   ["End Date", "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquam, nisi vitae maximus tincidunt, justo leo auctor neque, et fermentum ante libero ac libero."],
  ];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
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
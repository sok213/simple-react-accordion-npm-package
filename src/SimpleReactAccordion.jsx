import React, { Component, Fragment } from 'react';
import './SimpleReactAccordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class SimpleReactAccordion extends Component {
  constructor() {
    super();

    this.state = {
      activeBar: null
    }
  }

  applyTheme = () => {
    if(this.props.theme === "basic") {
      return "basic";
    } else if(this.props.theme === "minimal") {
      return "minimal";
    } else if(this.props.theme === "well") {
      return "well";
    } else if(this.props.theme === "dark") {
      return "dark";
    } else if(this.props.theme === "professional") {
      return "professional";
    }
  }

  applySizeClass({ content }) {
    if(content.length <= 284) {
      return "accordion__contentSmall";
    } else if(content.length <= 484) {
      return "accordion__contentMedium";
    } else {
      return "accordion__contentLarge";
    }
  }

  minimalIcons(key) {
    if(this.props.theme === "minimal") {
      if(this.state.activeBar === key) {
        return (
          <FontAwesomeIcon 
            icon={faAngleUp} 
            className="upArrow" 
          />
        );
      }
      return <FontAwesomeIcon icon={faAngleDown} />
    }
  }

  activateBar = (key) => {
    this.setState({ activeBar: key });
  }

  generateAccordion = () => {
    return this.props.items.map((item, key) => {
      return (
        <div key={key} className="accordionBar">
          <h2>THIS IS A TEST</h2>
          <input 
            type="radio" 
            name="panel" 
            id={`panel-${key}`} 
            onClick={this.activateBar.bind(this, key)}
          />
            <label 
              htmlFor={`panel-${key}`} 
              className="accordion__header"
            >
              {item.header} 
              <span className="minimalIcons">
                {this.minimalIcons(key)}
              </span>
            </label>
          <div 
            className={`
              accordion__content 
              ${this.applySizeClass(item)}
            `}
          >
            <p className="accordion__body">
              {
                item.content.length < 756 ?
                  item.content :
                    "ERROR: content must not exceed 756 characters." 
              }
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div className={`
          accordion
          ${this.applyTheme()}
        `}>
        test
          {/* {this.generateAccordion()} */}
        </div>
      </Fragment>
    );
  }
}

SimpleReactAccordion.propTypes = {
  theme: PropTypes.string,
  items: PropTypes.array
}

SimpleReactAccordion.defaultProps = {
  items: [
    {
      header: "this is the first item",
      content: "some content goes here."
    },
    {
      header: "this is the second item",
      content: "some content goes here."
    },
    {
      header: "this is the third item",
      content: "some content goes here."
    }
  ],
  theme: "basic"
}

export default SimpleReactAccordion;

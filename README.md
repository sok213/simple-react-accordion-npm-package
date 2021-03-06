# Simple React Accordion

A simple React accordion component that takes an array of JavaScript objects and processes it into a responsive accordion element. 

Very simple, easy to implement, and features 5 pre-built themes.

## [View demo page here](https://simple-react-accordion.herokuapp.com/)

#Installation
  
  Install with npm

    npm install simple-react-accordion --save

  or install with Yarn

    yarn add simple-react-accordion

## How to use

Import the module in your React app.
```javascript
import SimpleAccordion from 'simple-react-accordion';
```

Define your `accordionItems` either as a state or variable.

```javascript
/// Using state
class App extends Component {
  constructor() {
    super();

    this.state = {
      accordionItems: [
        {
          header: "This is the 1st item.",
          content: "Some content."
        },
        {
          header: "This is the 2nd item.",
          content: "Some more content."
        },
        {
          header: "This is the 3rd item.",
          content: "Even some more content!"
        }
      ]
    }
  }
}
```

Invoke the component with your items.

```javascript
render() {
  return(
    <div className="container">
      <SimpleAccordion 
        theme="professional"
        items={this.state.accordionItems}
      />
    </div>
  )
}
```

# Preview

Theme used in photo is `professional`.

![demo image of accordion](https://raw.githubusercontent.com/sok213/simple-react-accordion-npm-package/master/demo_image.png)

## Properties

Property | type | Options | Default | Description
--- | --- | --- | --- | --- |
theme | string | basic, minimal, well, professional, dark | basic | Sets the theme style.
items | array | | | Array of Objects. Objects require `header` and `content` properties.


#

[View Github Repository](https://github.com/sok213/simple-react-accordion-npm-package)

[Follow the developer on Instagram](https://www.instagram.com/just_soak_it_in)
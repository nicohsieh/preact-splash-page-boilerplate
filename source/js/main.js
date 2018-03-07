import { h, render, Component } from 'preact'
import Border from './components/UIBorder'

import '../style/main.scss'

class Test extends Component {
  render() {
    const word = 'Test'
    return <div onClick={() => {alert('clicked')}}>{word}</div>
  }
}

render((
    <div id="foo">
        <span>Hello, world!</span>
        <Test />
        <Border 
          width='50px'
          height='130px'
          size='3px'
          color='purple'
        />
    </div>
), document.body)

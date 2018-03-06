import { h, render, Component } from 'preact'
import '../style/main.scss'

render((
    <div id="foo">
        <span>Hello, world!</span>
        <button onClick={ e => alert("hi!") }>Click Me</button>
    </div>
), document.body)

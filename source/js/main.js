import { h, render, Component } from 'preact'
import CTA from './components/CTA'
import FlipImage from './components/FlipImage'

import '../style/main.scss'


render((
    <div id="foo">
        <h1>Preact Splash Page Boilerplate</h1>
        <FlipImage src='assets/images/duck.jpg' />
        <CTA word='Click Me!' />
    </div>
), document.querySelector('#root'))

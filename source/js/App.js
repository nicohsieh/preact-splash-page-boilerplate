import { h, render, Component } from 'preact'
import CTA from './components/CTA'
import FlipImage from './components/FlipImage'

class App extends Component {
	render(props, states) {
		return (
			<div id='app'>
				<h1>Preact Splash Page Boilerplate!</h1>
				<FlipImage src='assets/images/duck.jpg' />
				<CTA word='Click Me!' />
			</div>
		)
	}
}

export default App

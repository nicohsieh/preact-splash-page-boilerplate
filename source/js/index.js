import { h, render, Component } from 'preact'
import App from './App'

import '../style/main.scss'

const container = document.querySelector('#root')

function renderApp() {
	const app = <App />
	render(app, container)
}

renderApp()

// Set up HMR re-rendering.
if (module.hot) {
	//module.hot.accept()
	module.hot.accept('./App.js', () => {
		if (container.firstElementChild) {
			container.removeChild(container.firstElementChild)
		}
		renderApp()
	})
}

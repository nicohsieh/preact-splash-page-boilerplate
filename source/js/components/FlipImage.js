// Demo Component
import { h, render, Component } from 'preact'

import '../../style/FlipImage.scss'

class FlipImage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			flipped: false,
		}
	}

	flip = () => {
		const value = !this.state.flipped
		this.setState({
			flipped: value,
		})
	}

	render(props, states) {
		const flipClass = states.flipped ? 'flipped' : ''

		return (
			<div class={`flip-image ${flipClass}`} onClick={this.flip}>
				<img src={props.src} />
			</div>
		)
	}
}

export default FlipImage

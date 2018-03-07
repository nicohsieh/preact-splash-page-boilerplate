import { h } from 'preact'

const Border = ({ ...props }) => {
    const styles = {
      margin: '100px auto',
      width: props.width,
      height: props.height,
      border: `${props.size} ${props.color} solid`,
    }

    return <div class="border" style={styles} />
}

export default Border

class AxisY extends React.Component {
  render() {
    const { position, transformText, x , y, dy, text } = this.props;
    const style = { textAnchor: 'end' , 'fill': '#000'  };
    return (
    <G className='axis axis--y' transform={ position }>
      <text
        className='label'
        transform={ transformText }
        x={ x }
        y={ y }
        dy={ dy }
        style={ style }
      >{ text }</text>
    </G>
  )
  }
}
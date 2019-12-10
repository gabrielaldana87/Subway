class AxisX extends React.Component {
  render() {
    const { position, x , y, text, fontSize } = this.props;
    const style = { textAnchor: 'end' , 'fill': '#000'  };
    return (
      <G className='axis axis--x' transform={ position }>
        <text
          className='label'
          x={ x }
          y={ y }
          style={ style }
        >{ text }</text>
      </G>
    )
  }
}

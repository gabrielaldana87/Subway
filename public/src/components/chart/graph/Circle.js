class Circle extends React.Component {
  componentDidMount () {
    const
      { className } = this.props,
      lines = ['1','2','3','A','B','C','D','E','F','G','J','L','M','N','Q','R','W','Z','4','5','6','7']
      ;
    d3.select(`.${className}`).selectAll('.point')
      .data(lines)
      .enter().append('circle')
      .attr('r', 3 )
      .attr('cx', 616.9774511869764)
      .attr('cy', 852.8658360008121)
      .attr('id', d => `circle-${d}`)
      .attr('class', 'point')
      .style('fill', 'crimson')
      .style('opacity', .5);
  }
  ;
  render () {
    const { className } = this.props;
    return (
      <G
        className={ className }
      ></G>
    )
  }
}
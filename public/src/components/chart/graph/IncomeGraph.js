class IncomeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  ;
  xScale () {
    let
      now = new Date(),
      width = d3.select('.income-graph').attr('width'),
      domain = [now - (n - 2) * 750, now - 750]
      ;
    this.setState({ xDomain: domain })
    ;
    return d3.scaleLinear().range([0, width]).domain(domain)
    ;
  }
  ;
  yScale () {
    let
      height = d3.select('.income-graph').attr('height'),
      domain = [10000, 260000]
    ;
    this.setState({yDomain: domain })
    ;
    return d3.scaleLinear().range([height, 0]).domain(domain)
    ;
  }
  ;
  setXAxis () {
    let
      xScale = this.xScale(),
      xAxis = d3.axisBottom(xScale).ticks(3)
      ;
    d3.select('.axis.axis--x')
      .call(xAxis)
  }
  ;
  setYAxis () {
    let
      yScale = this.yScale(),
      yAxis = d3.axisLeft(yScale)
      ;
    d3.select('.axis.axis--y')
      .call(yAxis)
  }
  ;
  line () {
    let
      x = this.xScale(),
      y = this.yScale()
      ;
    return d3.line()
      .curve(d3.curveMonotoneX);
  }
  ;
  componentDidMount () {
    const { className } = this.props;
    d3.select(`.${ className }`)
      .append('path')
      .attr('class', 'income-line')
    ;
    this.setXAxis();
    this.setYAxis();
  }
  ;
  componentDidUpdate (prevProps) {
    var trail  = this.props.dataset;
    if (trail !== prevProps.dataset ) {
      let
        g = d3.select('.income-graph'),
        line = this.line(trail[trail.length - 1]),
        x = this.xScale(),
        y = this.yScale(),
        uniq = _.uniq(trail, o => o.properties.name ),
        neighborhoods = _.uniq(uniq, o => o.properties.neighborhood ),
        height = g.attr('height') + 5
      ;
      x.domain([ d3.min(trail, d => d.properties.ts ),  d3.max(trail, d => d.properties.ts )])
      ;
      d3.select('.income-graph .income-line')
         .datum(uniq)
         .attr('d', line.x(d => x(d.properties.ts)).y(d => y(d.properties.dp03_0062e)) )
         .style('fill', 'none')
         .style('stroke', '#e74c3c')
         .style('stroke-width', 2)
         .attr('transform', null)
      ;
      d3.select('.axis.axis--x').call(d3.axisBottom(x).ticks(3))
      ;
      const circle = g.selectAll('circle').data(uniq)
      ;
      circle.exit().remove()
      ;
      circle.enter().append('circle')
      ;
      circle
         .attr('class','station-circle')
         .attr('cx', d => x(d.properties.ts))
         .attr('cy', d => y(d.properties.dp03_0062e))
         .attr('r', 3)
         .style('stroke-width', 1)
         .style('stroke','red')
         .style('fill', 'white')
     ;
     const text = g.selectAll('.neigh-text').data(neighborhoods)
     ;
     text.exit().remove()
     ;
     text.enter().append('text')
       .attr('class', 'neigh-text')
     ;
     text
       .attr('x', d => x(d.properties.ts) )
       .text(d => d.properties.name )
       .attr('y', d => y(d.properties.dp03_0062e))
    }
  }

  render () {
    const { className, width, height, transform, children } = this.props;
    return (
      <G
        className={ className }
        width={ width }
        height={ height }
        transform={ transform }
      >
        { children }
      </G>
    )
  }
}
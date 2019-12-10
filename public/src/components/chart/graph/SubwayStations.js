
class SubwayStations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subway: '1',
      duration: 200000,
      stations: null
    }
  }
  projection () {
    const
      svg = d3.select('.subway'),
      width = svg.attr('width'),
      height = svg.attr('height')
      ;
    return d3.geoMercator()
      .center([-73.9967, 40.7072])
      .scale(160000)
      .translate([(width) / 2, (height)/2]);
  }
  ;
  ready (stations) {
    const
      projection = this.projection(),
      g = d3.select('.station-overlay'),
      track = this.state.subway
    ;
    this.setState({'stations': stations.features })
    ;
    g.selectAll('.stations')
      .data(stations.features)
      .enter()
      .append('circle')
      .attr('r', 3 )
      .attr('cx', d => projection(d.geometry.coordinates)[0] )
      .attr('cy', d => projection(d.geometry.coordinates)[1] )
      .attr('fill', 'rgba(255,255,255,0)')
      .attr('stroke', 'grey')
    ;
    g.selectAll('.income')
      .data(stations.features)
      .enter()
      .append('text')
      .attr('dx', d => projection(d.geometry.coordinates)[0] + 4 )
      .attr('dy', d => projection(d.geometry.coordinates)[1] + 4 )
      .text(d =>  d.properties.line.includes(track) ?  d.properties.name :null) //d.properties.name  : null)
      .style('fill','black')
      .style('font-size','8px');
  }
  ;
  componentDidMount () {
    d3.json('./data/subway_stations.json')
      .then( data => this.ready(data) )
    ;
  }
  ;
  render () {
    const { onClick, reference, children } = this.props;
    return(
      <G
        className='station-overlay'
      >
        { children }
      </G>
    )
  }
}
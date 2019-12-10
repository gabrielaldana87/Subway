
class BoroughMap extends React.Component {
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
  path () {
    return d3.geoPath()
      .projection(this.projection());
  }
  ;
  ready (geography) {
    const
      path = this.path()
    ;
    d3.select('.borough_overlay').selectAll('path.borough_overlay')
      .data(topojson.feature(geography, geography.objects.nyc).features)
      .enter()
      .append('path')
      .attr('d', path )
      .attr('class','borough_map')
  }
  ;
  componentDidMount () {
      d3.json('./data/nyc-map.json')
        .then( data => this.ready(data) )
    ;
  }
  ;
  render () {
    return(
      <G
        className='borough_overlay'
      >
      </G>
    )
  }
}
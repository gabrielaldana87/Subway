const array = [];
const n = 50;
const margin = {top: 35, left: 35, bottom: 0, right: 0};
const dimensions = { height: 400 - margin.top - margin.bottom, width: 1000 - margin.left - margin.right };
class SubwayPaths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 200000,
      subway: '1',
    }
  }
  ;
  projection () {
    let
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
  ready (routes) {
    const
      { className , identifier, pathsColor } = this.props,
      path = this.path()
      ;
    d3.select(`.${className}`).selectAll('.route')
      .data(routes[identifier])
      .enter()
      .append('path')
      .attr('class', d => pathsColor(d) )
      .attr('d', (d,i) => {
        let array = [];
        if(d.geometry.type==='LineString') {
          array.push(d.geometry.coordinates);
        }
        if(d.geometry.type==='MultiLineString') {
          d.geometry.coordinates.forEach( each => {
            array.push(each);
          });
        }
        return path({
          type: 'MultiLineString',
          coordinates: array
        });
      })
      .style('stroke-opacity', 1)
      .style('stroke-width', 2)
    ;
  }
  ;
  componentDidMount () {
    const { path } = this.props;
    d3.json(`./data/${path}`)
      .then( data => this.ready(data) )
    ;
  }
  ;
  render () {
    const
      { className , path , identifier, pathsColor } = this.props,
      style = {width: 1400, height: 1500},
      width = style.width / 3.25,
      height = style.height / 2.20,
      margin = {top: 90, right: 50, bottom: 20, left: 90},
      transform = `translate(${ margin.left },${ margin.top })`,
      positionX = `translate(0,${height})`,
      transformLabel = 'rotate(-90)'
      ;
    return (
      <G
        className={ className }
        path = { path }
        identifier={ identifier }
        pathsColor={ pathsColor }
      >
      </G>
    )
  }
}
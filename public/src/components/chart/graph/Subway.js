class Subway extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  ;
  render () {
    const style = {width: 1400, height: 1500};
    const { children, className } = this.props;
    return (
      <svg className={ className } {...style}>
        { children }
      </svg>
    )
  }
}
import React from "react";

export default function WithLogging (WrappedComponent) {
  return class extends React.Component {
    displayName = `WithLogging(${WrappedComponent.displayName})`
    componentDidMount(){
      console.log(`Component ${WrappedComponent.displayName} is mounted`)
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.displayName} is going to unmount`)
    }
    render () {
      return (<WrappedComponent {...this.props} />);
    }
  };
}

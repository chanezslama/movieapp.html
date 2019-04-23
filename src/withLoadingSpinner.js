import React, { PureComponent } from 'react'
import Spinner from './spinner'


function WithLoadingSpinner(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
    return (isLoading)?<Spinner /> :<Component {...props} /> 
    
  }
}

export default WithLoadingSpinner
import React from 'react'
import NavbarComponent from './NavbarComponent'

const SingleComponent = (props) => {
  return (
    <div className='container p-5'>
      <NavbarComponent />

      <div>SingleComponent</div>
      {props.match.params.slug}
      <pre>{ JSON.stringify(props,null, 2)}</pre>
    </div>
  )
}

export default SingleComponent
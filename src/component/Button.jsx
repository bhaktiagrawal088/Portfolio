import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = ({
    href,
    target,
    label,
    icon,
    classes

}) => {
  if(href){
    return (
        <a href={href} target={target} 
            className={'btn btn-primary' + (classes) || ""}
        >
        {label}
        {
            icon ? <span className='material-symbols-rounded' aria-hidden="true"> {icon}</span> : undefined
        }
        </a>
    )
  }
  else{
    return (
        <button className={' btn btn-primary' + (classes || "")}>
        {label}
        {
            icon ? <span className='material-symbols-rounded' aria-hidden="true"> {icon}</span> : undefined
        }
        </button>
    )
  }
}

PrimaryButton.prototype = {
    href : PropTypes.string,
    target : PropTypes.string,
    label : PropTypes.string.isRequired,
    icon : PropTypes.string,
    classes : PropTypes.string

}

const OutlineButton = ({
    href,
    target,
    label,
    icon,
    classes

}) => {
    const classNames = `btn btn-outline ${classes || ""}`;
  if(href){
    return (
        <a href={href} target={target} 
            className={classNames}
        >
        {label}
        {
            icon ? <span className='material-symbols-rounded' aria-hidden="true"> {icon}</span> : undefined
        }
        </a>
    )
  }
  else{
    return (
        <button className={classNames}>
        {label}
        {
            icon ? <span className='material-symbols-rounded' aria-hidden="true"> {icon}</span> : undefined
        }
        </button>
    )
  }
}

OutlineButton.prototype = {
    href : PropTypes.string,
    target : PropTypes.string,
    label : PropTypes.string.isRequired,
    icon : PropTypes.string,
    classes : PropTypes.string

}


export {PrimaryButton , OutlineButton}

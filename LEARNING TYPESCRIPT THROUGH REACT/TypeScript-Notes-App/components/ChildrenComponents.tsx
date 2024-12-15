import React from 'react';

type ChildrenProps = {
  children:React.ReactNode
}

const childrenstyles : React.CSSProperties = {
   border:"1px dotted green"
}

const ChildrenComponents : React.FC<ChildrenProps> = ({children}) => {
  return (
    <div style={childrenstyles}>{children}</div>
  )
}

export default ChildrenComponents
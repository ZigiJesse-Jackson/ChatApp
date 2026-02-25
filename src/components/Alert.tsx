import { type ReactNode } from 'react'

interface AlertProp{
    children: ReactNode;
}
const Alert = ({children}:AlertProp) => {
  return (
    <div>{children}</div>
  )
}

export default Alert
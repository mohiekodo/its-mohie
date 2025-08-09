import React from 'react'

const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

export default Container


import React from 'react'

export const Footer = () => {
  let footerstyle={
      position: "absolute",
      top: "auto",
      width: "100%"
  
  }
  return (
    <footer className='bg-dark text-light my-5 ' style={footerstyle}>
      <p className='text-center'>
        Copyright &copy; www.MyTodolist.com
      </p>
    </footer>
  )
}

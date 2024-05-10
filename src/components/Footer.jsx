import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 text-gray-400'> 
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg"  />
        <div>
          <p>Have any Questions?</p>
          <a href="#">Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { Navbar, Button } from 'flowbite-react';
import Image from 'next/image';

const navbar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="sticky top-0 bg-opacity-30"
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
          Drift
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button outline={true} gradientDuoTone="purpleToPink" className='mr-3'>
          visit__website
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true} className="text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-xl">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-xl">
          Team
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-xl">
          Reach out to us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar
import './App.css'

function App() {
  return (
    <>
      <Menu />
      <div className='content'>
        <p>Content will go here</p>
      </div>
      <p className="docs">
        Read the docs to learn more.
      </p>
    </>
  )
}

function Menu() {
  return(
    <nav className='navbar'>
      <h1 className='title'>CapAid</h1>
      <ul className='menu'>
        <MenuItem name="Home" href="/" />
        <MenuItem name="About" href="/about" id="about-link"/>
        <MenuItem name="Contact" href="/contact" target="_blank" id="contact-link"/>
      </ul>
    </nav>
  );
}

function MenuItem({name, href, ...rest}) {
  return(
    <li className='menu-item'>
      <a className='menu-link' href={href} {...rest}> {name} </a>
    </li> 
  )
}

export default App

import { GraphCanvas } from 'reagraph';
import './App.css'

function App() {
  

  return (
    <>
      <Menu />
      <div className='canvas'>
        <MyDiagram/>
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

function MyDiagram () {
  const nodes = [
    { id: '1', label: 'Node 1', icon: 'https://reagraph.com/favicon.ico' },
    { id: '2', label: 'Node 2' }
  ];

  const edges = [
    { source: '1', target: '2', id: '1-2', label: '1-2' }, 
    { source: '2', target: '1', id: '2-1', label: '2-1' }
  ];
  return (
    <GraphCanvas nodes={nodes} edges={edges} />
  )
}

export default App

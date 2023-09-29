import Logo from '../assets/img/Troll Face.png'
function Header() {
  return (
    <header className='header'>
     <img src={Logo} alt='Troll Face' className='header--image'/>
     <h1 className='header--logo'>Meme Generator</h1>
     <h3 className='header--title'>React Course - Project 3</h3>
    </header>
  )
}

export default Header
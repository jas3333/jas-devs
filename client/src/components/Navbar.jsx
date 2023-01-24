import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar space'>
            <div className='container'>
                <Link to='/' className='nav-links'>
                    jas-devs
                </Link>
            </div>
            <div className='container'>
                <Link to='/apps' className='nav-links mg-right-md'>
                    Apps
                </Link>
                <Link to='/Linux' className='nav-links mg-right-md'>
                    Linux
                </Link>
                <Link to='/Programming' className='nav-links mg-right-md'>
                    Programming
                </Link>
                <Link to='/Contact' className='nav-links mg-right-md'>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

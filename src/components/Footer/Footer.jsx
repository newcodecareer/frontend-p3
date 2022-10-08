import './footer.css';
import user from '../../image/logo.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src={user} alt='something wrong'/ >
            </div>
            <div>
                <span >&copy; 2022 Houddy Pty Ltd. All Rights Reserved.</span>
            </div>
            <div>
                <span >Privacy policy</span>
            </div>
            <div>
                <span >Terms of use</span>
            </div>     
        </div>
    )
}

export default Footer;
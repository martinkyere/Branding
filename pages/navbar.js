


  
import Link from 'next/link'

const navbar = () => {
    return (
        
        <nav className = 'navbar'>
            <div className = 'logo'>
                <h1>Acme Media</h1>
            </div>
            <ul>
                <link><a>Home</a></link>
                <a>About</a>
                <a>Services</a>

            {/* <div className ='dropdown'> 
             <ul> 
                <li>Social Media Post Edit/Personnel</li>
                <li>Social Media video Edit</li>
                <li>Social Media shoot photo</li>
                <li>Social Medea shoot video</li>
                <li>Websites</li>
                <li>Logo</li>
                <li>Brand Color Scheme</li>
                <li>Business Cards</li>
                <li>Flyer A4</li>
            </ul>
            </div> */}
                <li><a>Contact</a></li>
            </ul>
            <div className = 'border-2'>
            <div className = 'border-1'>
                <div className = 'img'>
                </div>

            </div>
            </div>
        </nav>

        
    )
}
export default navbar; 
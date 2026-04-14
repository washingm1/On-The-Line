import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
export default function Footer() { 
return (
<>
    <div className="footer">
       <div className="socialLinks">
<FontAwesomeIcon className = 'socialsIcon' icon={faInstagram} size = '10x' ></FontAwesomeIcon>
<FontAwesomeIcon className = 'socialsIcon'  icon={faTiktok}></FontAwesomeIcon>
 </div>
    </div>

</>

)

}
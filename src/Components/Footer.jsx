import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
export default function Footer() { 
return (
<>
    <div className="footer">
       <div className="socialLinks">
<a href="https://www.instagram.com/cooklikeimbook/" target='_blank' rel="noreferrer"> <FontAwesomeIcon className = 'socialsIcon' icon={faInstagram} size = '10x'></FontAwesomeIcon></a>
<a href="https://www.tiktok.com/@cooklikeimbook" target='_blank' rel="noreferrer"><FontAwesomeIcon className = 'socialsIcon'  icon={faTiktok}></FontAwesomeIcon></a>
 </div>
    </div>

</>

)

}
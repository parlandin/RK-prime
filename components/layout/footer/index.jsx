import GoogleMaps from "../../GoogleMaps";
import Styles from "./footer.style"

const Footer = () => {
    
    return (
        <Styles.WrapperFooter>
            <Styles.Wrapper>
                
                <GoogleMaps />
            </Styles.Wrapper>
           
        </Styles.WrapperFooter>
    )
}

export default Footer;
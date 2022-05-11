import Styles from "./maps.style";


const GoogleMaps = ()=> {
    return (
        <Styles.Wrapper>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31760465.329205003!2d-69.71823501470719!3d-13.657159891786419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1649887525901!5m2!1spt-BR!2sbr" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
           title="mapa da localização do site"></iframe>
        </Styles.Wrapper>
    )
}

export default GoogleMaps;
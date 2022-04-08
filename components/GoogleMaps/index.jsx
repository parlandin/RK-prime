import Styles from "./maps.style";


const GoogleMaps = ()=> {
    return (
        <Styles.Wrapper>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.1960653174326!2d-52.16478690317989!3d-14.054006646958642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936db761737dab85%3A0xdb4580a651feb446!2sRiska%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1649110457828!5m2!1spt-BR!2sbr" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
           </iframe>
        </Styles.Wrapper>
    )
}

export default GoogleMaps;
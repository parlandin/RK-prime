import Image from "next/image";
import GoogleMaps from "../../GoogleMaps";
import Styles from "./footer.style"

import Iinstragram  from "../../../public/images/instagram.svg"
import Iwhatsapp from "../../../public/images/whatsapp.svg"

const Footer = () => {
    
    return (
        <Styles.WrapperFooter>
            <Styles.Wrapper>
                <Styles.WrapperNetWork>
                    <Styles.NetWorkColumn>

                        <Styles.NetWork >
                            <Image src={Iinstragram} alt="logo do instragram" />
                            <Styles.NetWorkText href="https://www.instagram.com/pinduca_eletric/" target="_bank">
                                @pinduca_eletri
                            </Styles.NetWorkText>
                        </Styles.NetWork>

                        <Styles.NetWork>
                           <Image  src={Iinstragram} alt="logo do whatsapp"/> 
                           <Styles.NetWorkText  href="https://www.instagram.com/rk_prime_/" target="_bank">
                               @rk_prime
                            </Styles.NetWorkText>
                        </Styles.NetWork>

                    </Styles.NetWorkColumn>

                    <Styles.NetWorkColumn>
                        <Styles.NetWork>
                            <Image src={Iwhatsapp} alt=""/>
                            <Styles.NetWorkText href="#" target="_blank">(99)9 9999-9999</Styles.NetWorkText>
                        </Styles.NetWork>

                        <Styles.NetWork>
                            <Image src={Iwhatsapp} alt=""/>
                           <Styles.NetWorkText href="#" target="_blank">(99)9 9999-9999</Styles.NetWorkText>
                        </Styles.NetWork>
                    </Styles.NetWorkColumn>

                    <Styles.Address>
                        Rua. Onze, 05 - Guarujá - Expansão, Água Boa - MT, 78635-000
                    </Styles.Address>
                    
                </Styles.WrapperNetWork>

                <GoogleMaps />
            </Styles.Wrapper>
            
            <Styles.Copyright><p>©Todos os direitos resevado</p></Styles.Copyright>
        </Styles.WrapperFooter>
    )
}

export default Footer;
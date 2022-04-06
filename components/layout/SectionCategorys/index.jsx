import Styles from "./secCategoryes.style"
import TitleCategory from '../../TitleCategory';
import CarouselProducts from "../../CarouselProducts";
import Link from "next/link";


const SectionCategorys = ({title, categorys, more}) => {
    return (
        <Styles.Wrapper>
            <Styles.TitleSection>
                <TitleCategory title={title}/>
                {more && 
                    <Link href="/" passHref>
                    <Styles.Alink>Ver mais</Styles.Alink>
                 </Link>
                }
                
            </Styles.TitleSection>

            
            <CarouselProducts />
        </Styles.Wrapper>
    )
}

export default SectionCategorys;
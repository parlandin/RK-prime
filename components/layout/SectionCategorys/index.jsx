import Styles from "./secCategoryes.style"
import TitleCategory from '../../TitleCategory';
import CarouselProducts from "../../CarouselProducts";
import Link from "next/link";



const SectionCategorys = ({title, categorys, more, products}) => {

    

    return (
        <Styles.Wrapper>
            <Styles.TitleSection>
                <TitleCategory title={title}/>
                {more && 
                    <Link href={`/${categorys}`} passHref>
                    <Styles.Alink>Ver mais</Styles.Alink>
                 </Link>
                }
                
            </Styles.TitleSection>

            
            <CarouselProducts arrayProducts={products} categorys={categorys} />
        </Styles.Wrapper>
    )
}

export default SectionCategorys;
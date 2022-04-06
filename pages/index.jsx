import Banner from '../components/Banner';
import Container from '../components/layout/Container'
import SectionCategorys from '../components/layout/SectionCategorys';
import Styles from "./home.style"


 const Home = () => {
  return (
    <Container>
        <Styles.WrapperHome>
           <Banner />
           <SectionCategorys title="Destaques" more={false}/>
           <SectionCategorys title="Roupas" more={true}/>
           <SectionCategorys title="Acessorios" more={true}/>
        </Styles.WrapperHome>
    </Container>
  )
}


export default Home;
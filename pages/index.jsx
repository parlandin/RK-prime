import Head from "next/head";
import Banner from '../components/Banner';
import Container from '../components/layout/Container';
import SectionCategorys from '../components/layout/SectionCategorys';
import {Styles} from "../styles/Home.Styles";


 const Home = () => {
  return (
    <Container>
        <Head>
          <title>RKprime | Riska Tattoo</title>
        </Head>
        <Styles.WrapperHome>
           <Banner />
           <SectionCategorys title="Destaques" more={false}/>
           <SectionCategorys title="Acessórios" more={true} categorys={"roupas"}/>
           <SectionCategorys title="Tattoos" more={true}/>
        </Styles.WrapperHome>
    </Container>
  )
}


export default Home;
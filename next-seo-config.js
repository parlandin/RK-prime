const title = "RiskaTattoo/RkPrime - Loja de acessórios";
const description = "Loja de acessórios Masculinos e Feminilo, encontre tudo que você procura";

const Seo = {
    title,
    description,
    canonical: "https://rk-prime.vercel.app",
    openGraph: {
        type: "website",
        locale: "pt-BR",
        url: "https://rk-prime.vercel.app",
        title,
        description,
        images: [
            {
                url: "",
                alt: title,
                with: 400,
                height: 400,
            }
        ]
    }
}

export default Seo;
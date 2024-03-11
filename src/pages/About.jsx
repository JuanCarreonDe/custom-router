import { Link } from "../components/Link"

const i18n ={
  es: {
    title: "Sobre nosotros",
    description: "Esta es una descripción en español"
  },
  en: {
    title: "About us",
    description: "This is a description in English"
  }
}


const useI18n = (lang) =>{
  return i18n[lang] || i18n.en
}

const About = ({routeParams}) => {
  const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>
            Home
        </Link>
      </>
    )
  }

  export default About
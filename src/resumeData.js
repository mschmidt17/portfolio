import express from "./express.png";
import cssLogo from "./css-logo.png";
import sequelize from "./sequelize.png";


let resumeData = {
    "name": "Matías Schmidt",
    "role": "Programador Full Stack 💻",
    "linkedinId":"matias-schmidt1",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/matias-schmidt1/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/mschmidt17",
          "className":"fa fa-github"
        }
      ],
    "aboutme":"Soy un desarrollador full stack que actualmente reside en Argentina. Me inicie en el mundo de la programacion de manera autodidacta y luego realice un bootcamp de más de 800 hs de estudio intensivo que me ayudo a fortalecer mis conocimientos.",
    "aboutme2":"Soy una persona con disciplina, persistencia y actitud que busca sumar experiencia en el sector IT, que disfruta del trabajo en equipo y la resolución de problemas. Me encuentro en búsqueda de nuevos desafíos, estoy abierto a todas las oportunidades que me permitan crecer y seguir capacitándome. ",
    "address":"Argentina",
    "website":"link del portfolio deployado",
    "skills":[
      {
        "skillname":"HTML5",
        "img":"https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
      },
      {
        "skillname":"CSS",
        "img": cssLogo
      },
      {
        "skillname":"JavaScript",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
      },
      {
        "skillname":"React",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
      },
      {
        "skillname":"Redux",
        "img":"https://nightdeveloper.net/wp-content/uploads/2018/01/logo.png"
      },
      {
        "skillname":"NodeJS",
        "img":"https://ugeek.github.io/blog/images-blog/node.png"
      },
      {
        "skillname":"ExpressJS",
        "img": express
      },
      {
        "skillname":"Sequelize",
        "img": sequelize
      },
      {
        "skillname":"PostgreSQL",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
      },
      {
        "skillname":"Git",
        "img":"https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png"
      },    
    ],
    "portfolio":[
      {
        "name":"NETFLIX",
        "description":"Se trata de un proyecto que consiste en el desarrollo un Catálogo de Películas dinámico.",
        "imgurl":"https://user-images.githubusercontent.com/99290382/210804478-b3cae746-d310-46ef-914f-c858f65a1448.png",
        "deploy":"https://netflix-lcwz.vercel.app/"
      },
      {
        "name":"CLON MELI",
        "description":"Se trata de un clon de Mercado Libre, en el que consumo datos de su API desde el front-end.",
        "imgurl":"https://user-images.githubusercontent.com/99290382/210788945-960de16a-9332-40c8-8986-47045c57ca66.png",
        "deploy":"https://clon-mercado-libre-ms23.vercel.app/"
      },
      {
        "name":"MEMORY QATAR",
        "description":"Se trata de un juego clasico de memoria, adaptado a el mundial de futbol de qatar 2022.",
        "imgurl":"https://user-images.githubusercontent.com/99290382/210816307-8cdfc7d6-b7df-467c-8b74-148afaa7c096.png",
        "deploy":"https://memory-game-qatar.vercel.app/"
      },
      {
        "name":"WALLABy",
        "description":"Marketplace de NFT en donde podes comprar, vender, y crear tus propios NFTs.",
        "imgurl":"https://raw.githubusercontent.com/mschmidt17/mschmidt17/main/Landing.png",
        "deploy":"https://wallabyapp.vercel.app/"
      },
      {
        "name":"SPOTIFY",
        "description":"Busca y ordena los albumes del artista que se ingresa en el buscador",
        "imgurl":"https://i.ibb.co/mC0VJsr/Houlak-home.png",
        "deploy":"https://github.com/mschmidt17/Houlak"
      },
      {
        "name":"FORMULARIO",
        "description":"Guarda tu formulario y muestra todos los formularios completados",
        "imgurl":"https://i.ibb.co/6ZSv9JH/Captura-de-pantalla-45.png",
        "deploy":"https://greydive-2e644.firebaseapp.com/"
      },
      {
        "name":"FOODS APP",
        "description":"Página web donde podrás crear, buscar, filtrar y ver detalles referidos a recetas de comidas.",  
        "imgurl":"https://raw.githubusercontent.com/mschmidt17/PI-FOOD/master/Foto2.png",
        "deploy":"https://github.com/mschmidt17/PI-FOOD"
      },
      {
        "name":"50 Pojects 50 Days",
        "description":"Challenge de 50 dias donde se realizan mini proyectos utilizando distintas tegnologias. ",
        "imgurl":"https://pbs.twimg.com/media/EoHlB65XcAAZKHw.jpg:large",
        "deploy":"https://github.com/mschmidt17?tab=repositories"
      },
      {
        "name":"DOGS APP",
        "description":"Página web donde podrás crear, buscar, filtrar y ver detalles referidos a razas de perros.",
        "imgurl":"https://raw.githubusercontent.com/mschmidt17/DOGS/main/PI.1.png",
        "deploy":"https://github.com/mschmidt17/DOGS"
      },
    ],
}
  
export default resumeData
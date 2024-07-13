import styled from "./styles.module.css"
import { Instagram, Facebook } from 'lucide-react';


export function LinkPrincipal(){
  return(
    <>
      <div className={styled.container}>
      <div className={styled.profile}>
        <img
          src="Perfil.png"
          alt="Foto de perfil Coduca de João Velames"
        />
      </div>

      <div className={styled.CxName}>
        <h1>CODUCA</h1>
        <h3>de João Velames</h3>
        <p className={styled.txtalternativo}>Um <strong>NOVO</strong> nome, com um ótimo <strong>EXEMPLO!</strong></p>
      </div>

      <ul>
        <li>
          <a
            href="#"
            // target="_blank"
            >Quem sou eu?
          </a>
        </li>

        <li>
          <a
            href="#"
            // target="_blank"
            >Sugestões de Projetos</a
          >
        </li>

        <li>
          <a
            href="https://www.facebook.com/coducadejoaovelames"
            target="_blank"
            >Facebook</a
          >
        </li>

      </ul>
      
      <div className={styled.socialLinks}>
        <a  href="https://instagram.com/coducadejoaovelames" target="_blank">
        <Instagram className={styled.IconsSocialLinks}></Instagram>
        </a>
        <a
          href="https://www.https://www.facebook.com/coducadejoaovelames"
          target="_blank"
        >
        <Facebook className={styled.IconsSocialLinks}></Facebook>
        </a>
      </div>

    </div>

    </>
  )
}
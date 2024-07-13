import styled from "./styles.module.css"

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
        <p>@ImperioDosEmpates_</p>

      <div className={styled.switch}>
        <button></button>
        <span></span>
      </div>

      <ul>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=5561996770036&text=Ol%C3%A1%2C+Gostaria+de+tirar+algumas+d%C3%BAvidas+sobre+o+Mercado+de+Empates%21&type=phone_number&app_absent=0"
            target="_blank"
            >Dúvidas? Fale conosco</a
          >
        </li>

        <li>
          <a
            href="https://1drv.ms/x/s!AjxIeWz3BvOchK54XLRvnTkwLoh0ww?e=cejsoG"
            target="_blank"
            >Planilha de Resultados</a
          >
        </li>

        <li>
          <a href="https://imperiodosempates-page.vercel.app" target="_blank"
            >Acesse nosso GRUPO VIP</a
          >
        </li>

        <li>
          <a href="https://t.me/imperiodosempates" target="_blank"
            >Acompanhe nosso GRUPO</a
          >
        </li>
      </ul>
      <div id="social-links">
        <a href="https://instagram.com/imperiodosempates_" target="_blank">
        </a>
        <a
          href="https://www.tiktok.com/@imperiodosempates?_t=8ikyf1cinLC&_r=1"
          target="_blank"
        >
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=5561996770036&text=Ol%C3%A1%2C+Gostaria+de+tirar+algumas+d%C3%BAvidas+sobre+o+Mercado+de+Empates%21&type=phone_number&app_absent=0"
          target="_blank"
        >
         
        </a>
        <a
          href="https://youtube.com/@ImperiodosEmpates_?si=4YmRKax4tbNtAukn"
          target="_blank"
        >
        </a>
      </div>

      <footer>Copyright © 2022-2024</footer>
    </div>

    </>
  )
}
import React from 'react'

function Container({ children }) {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-12'>
      {children}
    </div>
  )
}

export default function about() {
  return (
    <Container>
      <h2 className='font-bold text-3xl uppercase py-12'>Sobre</h2>
      <div className='px-6 lg:px-96 text-justify'>
        <p>
          A plataforma de listagem de filmes é uma aplicação desenvolvida com o objetivo de proporcionar aos usuários uma forma fácil e intuitiva de encontrar e descobrir novos filmes. Nós utilizamos a API TMDb para fornecer uma grande variedade de conteúdo, e oferecemos diversas opções de filtro e busca para que os usuários possam encontrar exatamente o que estão procurando. Além disso, nós também incluimos uma opção de tema claro/escuro e paginação para tornar a experiência do usuário ainda mais agradável. Nós esperamos que você aproveite sua jornada em nossa plataforma e descubra novos filmes incríveis.
        </p>
      </div>

    </Container>
  )
}

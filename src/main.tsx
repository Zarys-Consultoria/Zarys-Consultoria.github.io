import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Importando a árvore de rotas gerada e o CSS
import { routeTree } from './routeTree.gen'
import './styles.css'

// Instanciando o cliente de requisições
const queryClient = new QueryClient()

// Criando o roteador padrão
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

// Injetando o React na Div "root" do HTML
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}

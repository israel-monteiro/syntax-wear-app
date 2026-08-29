// Importa os componentes e funções necessários para configuração do roteamento do TanStack Router
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Importa a árvore de rotas que foi gerada automaticamente a partir da estrutura de arquivos
import { routeTree } from "./router-tree-gen";
import { CartProvider } from "./contexts/CartProvider";

// Cria e configura a instância global do roteador passando a árvore de rotas do projeto
const router = createRouter({ routeTree });

// Registra a instância do roteador no próprio módulo do TanStack Router
// Isso habilita segurança de tipos (Type Safety) forte ao navegar pelas rotas na aplicação
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    )
}
export default App;


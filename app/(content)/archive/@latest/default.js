import { getLatestNews } from "@/app/helpers/news";
import NewsList from "@/components/news-list";

/**
 * Quando numa estrutura de rotas paralelas, todas as pastas @... devem suportar 
 * as diferentes subrotas.
 * 
 * Archive possui uma rota dinâmica, de modo que /archive/2024 possa exibir as 
 * notícias do ano.
 * 
 * Então, @latest deve suportar /latest e /latest/2024
 * 
 * Adicionar uma rota dinâmica apenas para isto não faz sentido.
 * 
 * Para estas situações NextJS define uma página fallback "default.js" que é renredizada 
 * quando uma subrota não é suportada. 
 */
export default function LatestNewsPage() {
  const latest = getLatestNews()
  return (
    <>
      <h2>
        Latest News Page
      </h2>
      <NewsList news={latest} />
    </>
  );
}

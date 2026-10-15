# **\# Diretriz de Desenvolvimento: Landing Page SPA "Brasil Cintas"**

O trecho a seguir contém o prompt de especificação técnica e diretrizes de engenharia de front-end para a criação da página de vendas single-page em HTML5 e Tailwind CSS, otimizada para conversão e tráfego pago.

# **\# Prompt do Projeto**

Atue como um Engenheiro Front-End Especialista em Conversão e crie uma Landing Page Single-Page Application (SPA) em HTML5 puro e Tailwind CSS via CDN. O objetivo da página é vender o "Short Cinta Modelador" usando o método de "Pagamento na Entrega" (Cash on Delivery) focado em tráfego frio (YouTube Ads). A marca da loja é "Brasil Cintas" (domínio brasilcintas.shop).

## **\#\# Diretrizes de Skills (agentic-awesome-skills)**

Utilize a sua capacidade de orquestração de skills do catálogo `agentic-awesome-skills` (como `@ui-skills`, `@tailwind-expert`, `@html5-semantics` ou equivalentes) para garantir que o código gerado segue as melhores práticas de acessibilidade (a11y, ARIA tags), semântica estrutural (tags HTML5 corretas) e refinos avançados de UI/UX (sombras fluidas, espaçamentos consistentes, estados de hover e focus acessíveis).

## **\#\# Diretrizes Técnicas e Design System**

* **Framework:** Tailwind CSS (via CDN oficial).  
* **Tipografia:** 'Inter' via Google Fonts (pesos 400, 600, 700, 800).  
* **Paleta de Cores:**  
  * Fundo: Branco e Gelo (`bg-gray-50` e `bg-white`).  
  * Texto principal: Cinza escuro e Preto (`text-gray-900`, `text-gray-600`).  
  * Destaque e CTA: Verde WhatsApp (`bg-[#25D366]`).  
  * Escassez e Atenção: Vermelho ou Rosa (`text-red-500` / `text-pink-600`).  
* **Mídia e Ativos do Projeto:**  
  * Hero Video/GIF Placeholder: Tag de vídeo HTML5 chamando `short-cinta-reduz-medidas-na-hora.mp4` com atributos `autoplay`, `loop`, `muted`, `playsinline`.  
  * Prova Social (Antes e Depois): `Antes_Depois_Quadrado_2.png`  
  * Prova Social (Funcionalidade Detalhada): `SaveClip.App_481073193_989587103365827_958560532061879314_n.jpg`  
  * Tabela de Medidas: `4.jpg`  
  * Prova Social WhatsApp 1: `print1.jpg`  
  * Prova Social WhatsApp 2: `print2.jpg`  
  * Prova Social WhatsApp 3: `print3.jpg`  
  * Links de Checkout (Logzz):  
    1. Oferta 1 Unidade: `https://entrega.logzz.com.br/pay/memq4ed3r/juxtz-01-short-cinta`  
    2. Oferta 2 Unidades (Leve 2): `https://entrega.logzz.com.br/pay/memq4ed3r/02-cinta-oficial`  
    3. Oferta 3 Unidades: `https://entrega.logzz.com.br/pay/memq4ed3r/03-short-cinta`

---

# **\# Mapeamento de Ativos e Arquivos**

| Identificador do Ativo | Nome do Arquivo Local | Função no Layout |
| :---- | :---- | :---- |
| Vídeo Principal | `short-cinta-reduz-medidas-na-hora.mp4` | Mídia de demonstração na primeira dobra (Hero) |
| Detalhamento Funcional | `SaveClip.App_481073193_989587103365827_958560532061879314_n.jpg` | Imagem da coluna lateral no layout de benefícios |
| Transformação | `Antes_Depois_Quadrado_2.png` | Imagem comparativa de antes e depois |
| Depoimento WhatsApp A | `print1.jpg` | Print de validação social no grid de feedbacks |
| Depoimento WhatsApp B | `print2.jpg` | Print de validação social no grid de feedbacks |
| Depoimento WhatsApp C | `print3.jpg` | Print de validação social no grid de feedbacks |
| Guia de Tamanhos | `4.jpg` | Tabela explicativa de medidas P/M e G/GG |

---

# **\# Estrutura dos Blocos da Página**

## **\#\# Bloco 0: Header (Marca)**

* Barra superior fixa ou estática de fundo branco com sombra leve (`shadow-sm`).  
* Identificação da marca centralizada ou à esquerda: **Brasil Cintas** (fonte em negrito, tamanho XL).

## **\#\# Bloco 1: Primeira Dobra (Hero)**

* Fundo branco.  
* **Headline (H1):** "Esqueça as cintas que a sufocam e enrolam o dia todo." (Centralizada, negrito, destaque visual).  
* **Subheadline:** "Descubra o Short Cinta que reduz até 3 medidas instantaneamente, com máximo conforto. Encomende hoje com envio grátis e pague apenas quando a encomenda chegar às suas mãos\!"  
* **Mídia Hero:** Tag `<video>` referenciando `short-cinta-reduz-medidas-na-hora.mp4` com reprodução automática contínua e sem som, aplicando cantos arredondados e sombra contínua.  
* **CTA Principal:** Botão em tom verde de alta conversão (`bg-[#25D366]`) com micro-animação de atenção. Texto: "Quero Encomendar e Pagar na Entrega". Link apontando para o checkout de oferta oficial Logzz (`https://entrega.logzz.com.br/pay/memq4ed3r/02-cinta-oficial`).

## **\#\# Bloco 2: Conexão e Benefícios (Split Layout)**

* Fundo gelo (`bg-gray-50`).  
* **Título (H2):** "Sabe aquela sensação de não usar uma roupa linda porque marca a barriga?"  
* **Subtexto:** "O problema não é o seu corpo, é o produto que está a utilizar. Veja porque o nosso Short Cinta é diferente:"  
* **Grid de 2 Colunas:**  
  * *Coluna Esquerda:* Lista com ícones SVG modernos de confirmação (checkmarks) abordando:  
    1. Possui 4 barbatanas que garantem que o short não enrola ao sentar ou andar.  
    2. Segura a barriga e as laterais, afinando a cintura instantaneamente.  
    3. Melhora a postura no dia a dia.  
    4. Tecido premium super confortável para usar o dia todo sem magoar.  
  * *Coluna Direita:* Exibição da imagem `SaveClip.App_481073193_989587103365827_958560532061879314_n.jpg` estilizada com cantos arredondados e elevação por sombra.

## **\#\# Bloco 3: Prova Social e Segurança**

* Fundo branco.  
* **Título (H2):** "Quem usa, recomenda".  
* **Sub-seção 1 (A Transformação):** Imagem comparativa `Antes_Depois_Quadrado_2.png` alinhada ao centro com largura máxima controlada (`max-w-md`).  
* **Sub-seção 2 (Depoimentos):** Grid responsivo (1 coluna em dispositivos móveis, 3 colunas em telas médias/grandes) contendo as imagens `print1.jpg`, `print2.jpg` e `print3.jpg`. Efeito interativo de zoom suave ao passar o ponteiro (`hover:scale-105 transition`).  
* **Sub-seção 3 (Escolha o seu Tamanho):** Guia com orientações sobre os tamanhos P/M e G/GG, acompanhada da imagem da tabela de medidas `4.jpg` centralizada.

## **\#\# Bloco 4: Tabela de Ofertas (Pricing com Ancoragem)**

* Fundo gelo (`bg-gray-50`).  
* **Título (H2):** "Promoção Relâmpago".  
* **Subtítulo:** "Estoque Limitado\! Frete Grátis para regiões abrangidas."  
* **Estrutura de Preços (3 Cards com Alinhamento Vertical):**  
  * *Card 1 (Entrada):* "1 Unidade" | "Para experimentar" | Preço: "R\$ 129,90" | CTA em tom escuro apontando para `https://entrega.logzz.com.br/pay/memq4ed3r/juxtz-01-short-cinta`: "Pedir 1 Unidade".  
  * *Card 2 (Destaque Central):* Borda destacada em verde (`border-[#25D366]`), escala aumentada (`scale-105`), selo flutuante "MAIS VENDIDO". Título: "Compre 1, Leve 2" | "Menos de R\$ 80 cada\!" | Preço: "R\$ 159,90" | Nota: "Até 12x no cartão. Você só paga na entrega\!" | CTA em verde animado (`pulse`) apontando para `https://entrega.logzz.com.br/pay/memq4ed3r/02-cinta-oficial`: "Quero a Promoção".  
  * *Card 3 (Kit Máximo):* "Leve 3 Unidades" | "Máxima economia" | Preço: "R\$ 209,90" | CTA em tom escuro apontando para `https://entrega.logzz.com.br/pay/memq4ed3r/03-short-cinta`: "Pedir 3 Unidades".

## **\#\# Bloco 5: Perguntas Frequentes (FAQ) e Rodapé**

* Fundo escuro (`bg-gray-900`, texto em `text-gray-300`).  
* **Estrutura FAQ (Accordion ou Bloco Semântico):**  
  1. *Posso pedir tamanhos diferentes na promoção leve 2?*  
     Sim\! Basta selecionar o primeiro tamanho na página de finalização, clicar em adicionar, e depois adicionar o segundo tamanho normalmente.  
  2. *Como funciona o pagamento na entrega?*  
     O risco é nosso. Faz a encomenda hoje e só paga ao estafeta quando receber o produto na sua casa.  
  3. *A minha cidade não tem entrega rápida. E agora?*  
     Para regiões fora da cobertura expressa, oferecemos envio grátis via Correios (5 a 7 dias úteis). Fale com o nosso suporte.  
* **Suporte Direto:** Botão estilizado com contorno verde vazado (outline) "Falar com Atendente no WhatsApp" apontando para a API do WhatsApp.  
* **Compliance e Rodapé Legal:** Links para Políticas de Privacidade, Termos de Uso, e Trocas e Devoluções.  
* **Copyright e Aviso Legal:** "O prazo para trocas e devoluções é de 7 dias após a receção do produto. © 2026 Brasil Cintas. Todos os direitos reservados."

---

# **\# Ação Esperada**

Gerar o código do arquivo `index.html` completo contendo toda a estrutura especificada, utilizando as diretrizes de acessibilidade e micro-interações do Tailwind CSS para garantir responsividade mobile-first e taxa de conversão otimizada. O elemento \<title\> deve conter exatamente: Brasil Cintas | Short Cinta Modelador \- Reduza Medidas na Hora.
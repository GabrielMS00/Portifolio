import { ChartPie, ClipboardList, FolderTree, Braces, Layers, ShieldCheck, Smartphone } from 'lucide-react'
import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'bora-onde',
    name: 'Bora Onde',
    category: 'Mobile',
    scope: 'iOS & Android',
    year: '2026',
    status: 'MVP concluído',
    description:
      'App mobile para decidir onde comer e beber sem perder horas escolhendo, seja a sós, a dois, com amigos, em família ou em uma comemoração. Com perguntas rápidas sobre o tipo de lugar, a comida e a companhia, o app indica o lugar certo para o momento, e os donos de bares, restaurantes e cafeterias configuram para qual ocasião e público o local combina. O MVP foi construído com Expo e Supabase.',
    features: [
      {
        icon: Layers,
        title: 'Do protótipo ao código',
        text: 'Wireframe, manual da marca e protótipo Hi-Fi validados no Figma antes da implementação.',
      },
      {
        icon: Smartphone,
        title: 'Uma base, duas lojas',
        text: 'React Native com Expo gera os apps de iOS e Android a partir do mesmo código TypeScript.',
      },
      {
        icon: ShieldCheck,
        title: 'Backend gerenciado',
        text: 'Supabase com autenticação, PostgreSQL e regras de acesso por usuário (Row Level Security).',
      },
      {
        icon: Braces,
        title: 'Tipagem ponta a ponta',
        text: 'Tipos gerados a partir do esquema do banco e compartilhados pelas telas.',
      },
    ],
    stack: [
      { label: 'Mobile', items: ['TypeScript', 'React Native', 'Expo'] },
      { label: 'Backend', items: ['Supabase', 'PostgreSQL'] },
      { label: 'Design', items: ['Figma'] },
    ],
    screens: [
      {
        title: 'Login',
        caption: 'Entrada por e-mail e senha, com criação de conta e acesso ao modo demonstração.',
        image: '/projects/bora-onde/01-login.webp',
        statusColor: '#f7f6f2',
        alt: 'Tela de login do Bora Onde com campos de e-mail e senha, botão entrar e criar nova conta',
      },
      {
        title: 'Feed',
        caption: 'Lugares perto de você, com filtros por tipo de lugar e companhia.',
        image: '/projects/bora-onde/02-feed.webp',
        statusColor: '#f7f6f2',
        alt: 'Tela de feed do Bora Onde com a lista "Perto de você" e filtros de categoria',
      },
      {
        title: 'Filtro por tipo',
        caption: 'O feed filtra os lugares por tipo, como bar, restaurante e cafeteria.',
        image: '/projects/bora-onde/03-feed-filtro-bar.webp',
        statusColor: '#f7f6f2',
        alt: 'Feed do Bora Onde filtrado por bar, mostrando três lugares e o botão limpar filtros',
      },
      {
        title: 'Questionário',
        caption: 'Perguntas sobre tipo de lugar e companhia alimentam a indicação.',
        image: '/projects/bora-onde/04-indicacao.webp',
        statusColor: '#f0ece6',
        alt: 'Tela "Bora decidir?" do Bora Onde com perguntas sobre o tipo de lugar e com quem a pessoa vai',
      },
      {
        title: 'Indicação',
        caption: 'Respostas rápidas viram uma indicação de lugar, com opção de tentar outra.',
        image: '/projects/bora-onde/05-indicacao-resultado.webp',
        statusColor: '#f0ece6',
        alt: 'Tela de indicação do Bora Onde sugerindo o Sakura Sushi Bar',
      },
      {
        title: 'Salvos',
        caption: 'Lista dos lugares guardados nos favoritos.',
        image: '/projects/bora-onde/06-salvos.webp',
        statusColor: '#f7f6f2',
        alt: 'Tela de salvos do Bora Onde com a lista de cinco lugares favoritos',
      },
      {
        title: 'Lugar salvo',
        caption: 'Detalhes do lugar, com tipo, endereço e tags, guardados nos favoritos.',
        image: '/projects/bora-onde/07-lugar-salvo.webp',
        statusColor: '#f7f6f2',
        alt: 'Tela de lugar salvo do Bora Onde com foto, endereço e tags do estabelecimento',
      },
      {
        title: 'Perfil',
        caption: 'Dados da conta, cidade do feed e opção de sair.',
        image: '/projects/bora-onde/08-perfil-conta.webp',
        statusColor: '#f7f6f2',
        alt: 'Tela de perfil do Bora Onde com dados pessoais, cidade e botão para sair da conta',
      },
    ],
    screenAspect: 1179 / 2556,
    repoUrl: 'https://github.com/GabrielMS00/Bora-Onde',
  },
  {
    id: 'go-finances',
    name: 'Go Finances',
    category: 'Mobile',
    scope: 'Finanças pessoais',
    year: '2026',
    status: 'MVP concluído',
    description:
      'Aplicativo mobile de controle financeiro pessoal. O usuário registra entradas e saídas, agrupa os gastos por categoria e acompanha um resumo visual das finanças, com login por e-mail e senha via Supabase.',
    features: [
      {
        icon: ShieldCheck,
        title: 'Autenticação com Supabase',
        text: 'Cadastro e login por e-mail e senha, com a sessão em um contexto React. Login com Google e Apple em desenvolvimento.',
      },
      {
        icon: ClipboardList,
        title: 'Cadastro validado',
        text: 'Formulário de transação com React Hook Form e Yup: nome, valor, tipo e categoria.',
      },
      {
        icon: ChartPie,
        title: 'Resumo por categoria',
        text: 'Gráfico com Victory Native mostra para onde vai o dinheiro em cada categoria do mês.',
      },
      {
        icon: FolderTree,
        title: 'Navegação por arquivos',
        text: 'Expo Router organiza as telas em grupos de autenticação e de abas.',
      },
    ],
    stack: [
      { label: 'Mobile', items: ['TypeScript', 'React Native', 'Expo', 'Expo Router'] },
      { label: 'Interface', items: ['NativeWind', 'Victory Native'] },
      { label: 'Formulários', items: ['React Hook Form', 'Yup'] },
      { label: 'Dados', items: ['Supabase Auth', 'AsyncStorage'] },
    ],
    screens: [
      {
        title: 'Login',
        caption: 'Tela inicial com as opções de entrada: Google, Apple e e-mail.',
        image: '/projects/go-finances/01-login.webp',
        statusColor: '#5534d3',
        alt: 'Tela de login do Go Finances com os botões para entrar com Google, Apple ou e-mail',
      },
      {
        title: 'Dashboard',
        caption: 'Entradas, saídas e total do mês com o histórico de transações.',
        image: '/projects/go-finances/02-dashboard.webp',
        statusColor: '#5534d3',
        alt: 'Dashboard do Go Finances com o card de entradas e a listagem de transações',
      },
      {
        title: 'Total do mês',
        caption: 'O card de total soma entradas e saídas e mostra a data da última transação.',
        image: '/projects/go-finances/03-detalhes-dashboard.webp',
        statusColor: '#5534d3',
        alt: 'Dashboard do Go Finances rolado até o card de total, com a listagem de transações abaixo',
      },
      {
        title: 'Categoria',
        caption: 'Seleção da categoria ao cadastrar uma transação.',
        image: '/projects/go-finances/04-categoria.webp',
        statusColor: '#5534d3',
        alt: 'Lista de categorias do Go Finances: compras, alimentação, salário, carro, lazer e estudos',
      },
    ],
    screenAspect: 770 / 1600,
    repoUrl: 'https://github.com/GabrielMS00/Go-Finances',
  },
]

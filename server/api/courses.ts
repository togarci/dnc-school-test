export default defineEventHandler((event) => {
  let data = [
    {
      id: 5,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Desenvolvimento Web',
      category: 'web-development',
      description: 'Descrição do curso 1 da categoria Desenvolvimento Web.',
      slug: 'curso-1-web-development',
    },
    {
      id: 6,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Desenvolvimento Web',
      category: 'web-development',
      description: 'Descrição do curso 2 da categoria Desenvolvimento Web.',
      slug: 'curso-2-web-development',
    },
    {
      id: 7,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Desenvolvimento Web',
      category: 'web-development',
      description: 'Descrição do curso 3 da categoria Desenvolvimento Web.',
      slug: 'curso-3-web-development',
    },
    {
      id: 8,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Desenvolvimento Web',
      category: 'web-development',
      description: 'Descrição do curso 4 da categoria Desenvolvimento Web.',
      slug: 'curso-4-web-development',
    },
    {
      id: 9,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Design Gráfico',
      category: 'graphic-design',
      description: 'Descrição do curso 1 da categoria Design Gráfico.',
      slug: 'curso-1-graphic-design',
    },
    {
      id: 10,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Design Gráfico',
      category: 'graphic-design',
      description: 'Descrição do curso 2 da categoria Design Gráfico.',
      slug: 'curso-2-graphic-design',
    },
    {
      id: 11,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Design Gráfico',
      category: 'graphic-design',
      description: 'Descrição do curso 3 da categoria Design Gráfico.',
      slug: 'curso-3-graphic-design',
    },
    {
      id: 12,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Design Gráfico',
      category: 'graphic-design',
      description: 'Descrição do curso 4 da categoria Design Gráfico.',
      slug: 'curso-4-graphic-design',
    },
    {
      id: 13,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Marketing Digital',
      category: 'digital-marketing',
      description: 'Descrição do curso 1 da categoria Marketing Digital.',
      slug: 'curso-1-digital-marketing',
    },
    {
      id: 14,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Marketing Digital',
      category: 'digital-marketing',
      description: 'Descrição do curso 2 da categoria Marketing Digital.',
      slug: 'curso-2-digital-marketing',
    },
    {
      id: 15,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Marketing Digital',
      category: 'digital-marketing',
      description: 'Descrição do curso 3 da categoria Marketing Digital.',
      slug: 'curso-3-digital-marketing',
    },
    {
      id: 16,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Marketing Digital',
      category: 'digital-marketing',
      description: 'Descrição do curso 4 da categoria Marketing Digital.',
      slug: 'curso-4-digital-marketing',
    },
    {
      id: 17,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Ciência de Dados',
      category: 'data-science',
      description: 'Descrição do curso 1 da categoria Ciência de Dados.',
      slug: 'curso-1-data-science',
    },
    {
      id: 18,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Ciência de Dados',
      category: 'data-science',
      description: 'Descrição do curso 2 da categoria Ciência de Dados.',
      slug: 'curso-2-data-science',
    },
    {
      id: 19,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Ciência de Dados',
      category: 'data-science',
      description: 'Descrição do curso 3 da categoria Ciência de Dados.',
      slug: 'curso-3-data-science',
    },
    {
      id: 20,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Ciência de Dados',
      category: 'data-science',
      description: 'Descrição do curso 4 da categoria Ciência de Dados.',
      slug: 'curso-4-data-science',
    },
    {
      id: 21,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Programação em Python',
      category: 'python-programming',
      description: 'Descrição do curso 1 da categoria Programação em Python.',
      slug: 'curso-1-python-programming',
    },
    {
      id: 22,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Programação em Python',
      category: 'python-programming',
      description: 'Descrição do curso 2 da categoria Programação em Python.',
      slug: 'curso-2-python-programming',
    },
    {
      id: 23,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Programação em Python',
      category: 'python-programming',
      description: 'Descrição do curso 3 da categoria Programação em Python.',
      slug: 'curso-3-python-programming',
    },
    {
      id: 24,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Programação em Python',
      category: 'python-programming',
      description: 'Descrição do curso 4 da categoria Programação em Python.',
      slug: 'curso-4-python-programming',
    },
    {
      id: 25,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Redes e Segurança',
      category: 'network-security',
      description: 'Descrição do curso 1 da categoria Redes e Segurança.',
      slug: 'curso-1-network-security',
    },
    {
      id: 26,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Redes e Segurança',
      category: 'network-security',
      description: 'Descrição do curso 2 da categoria Redes e Segurança.',
      slug: 'curso-2-network-security',
    },
    {
      id: 27,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Redes e Segurança',
      category: 'network-security',
      description: 'Descrição do curso 3 da categoria Redes e Segurança.',
      slug: 'curso-3-network-security',
    },
    {
      id: 28,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Redes e Segurança',
      category: 'network-security',
      description: 'Descrição do curso 4 da categoria Redes e Segurança.',
      slug: 'curso-4-network-security',
    },
    {
      id: 29,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Desenvolvimento de Aplicativos Móveis',
      category: 'mobile-app-development',
      description:
        'Descrição do curso 1 da categoria Desenvolvimento de Aplicativos Móveis.',
      slug: 'curso-1-mobile-app-development',
    },
    {
      id: 30,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Desenvolvimento de Aplicativos Móveis',
      category: 'mobile-app-development',
      description:
        'Descrição do curso 2 da categoria Desenvolvimento de Aplicativos Móveis.',
      slug: 'curso-2-mobile-app-development',
    },
    {
      id: 31,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Desenvolvimento de Aplicativos Móveis',
      category: 'mobile-app-development',
      description:
        'Descrição do curso 3 da categoria Desenvolvimento de Aplicativos Móveis.',
      slug: 'curso-3-mobile-app-development',
    },
    {
      id: 32,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Desenvolvimento de Aplicativos Móveis',
      category: 'mobile-app-development',
      description:
        'Descrição do curso 4 da categoria Desenvolvimento de Aplicativos Móveis.',
      slug: 'curso-4-mobile-app-development',
    },
    {
      id: 33,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Inteligência Artificial',
      category: 'artificial-intelligence',
      description: 'Descrição do curso 1 da categoria Inteligência Artificial.',
      slug: 'curso-1-artificial-intelligence',
    },
    {
      id: 34,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Inteligência Artificial',
      category: 'artificial-intelligence',
      description: 'Descrição do curso 2 da categoria Inteligência Artificial.',
      slug: 'curso-2-artificial-intelligence',
    },
    {
      id: 35,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Inteligência Artificial',
      category: 'artificial-intelligence',
      description: 'Descrição do curso 3 da categoria Inteligência Artificial.',
      slug: 'curso-3-artificial-intelligence',
    },
    {
      id: 36,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Inteligência Artificial',
      category: 'artificial-intelligence',
      description: 'Descrição do curso 4 da categoria Inteligência Artificial.',
      slug: 'curso-4-artificial-intelligence',
    },
    {
      id: 37,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Desenvolvimento de Jogos',
      category: 'game-development',
      description:
        'Descrição do curso 1 da categoria Desenvolvimento de Jogos.',
      slug: 'curso-1-game-development',
    },
    {
      id: 38,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Desenvolvimento de Jogos',
      category: 'game-development',
      description:
        'Descrição do curso 2 da categoria Desenvolvimento de Jogos.',
      slug: 'curso-2-game-development',
    },
    {
      id: 39,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Desenvolvimento de Jogos',
      category: 'game-development',
      description:
        'Descrição do curso 3 da categoria Desenvolvimento de Jogos.',
      slug: 'curso-3-game-development',
    },
    {
      id: 40,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Desenvolvimento de Jogos',
      category: 'game-development',
      description:
        'Descrição do curso 4 da categoria Desenvolvimento de Jogos.',
      slug: 'curso-4-game-development',
    },
    {
      id: 41,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 1 - Cloud Computing',
      category: 'cloud-computing',
      description: 'Descrição do curso 1 da categoria Cloud Computing.',
      slug: 'curso-1-cloud-computing',
    },
    {
      id: 42,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 2 - Cloud Computing',
      category: 'cloud-computing',
      description: 'Descrição do curso 2 da categoria Cloud Computing.',
      slug: 'curso-2-cloud-computing',
    },
    {
      id: 43,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 3 - Cloud Computing',
      category: 'cloud-computing',
      description: 'Descrição do curso 3 da categoria Cloud Computing.',
      slug: 'curso-3-cloud-computing',
    },
    {
      id: 44,
      teacher: {
        id: 1,
        name: 'Maria Clara',
        graduation: 'Mdas',
      },
      course: 'Curso 4 - Cloud Computing',
      category: 'cloud-computing',
      description: 'Descrição do curso 4 da categoria Cloud Computing.',
      slug: 'curso-4-cloud-computing',
    },
  ];

  const { page, querySearch } = getQuery(event);
  let pag = Number(page) * 8;
  if (!page) return data;

  const checkPagination = data.length > pag;
  data = data.slice(0, pag);

  return {
    data: data,
    hasPagination: checkPagination,
  };
});

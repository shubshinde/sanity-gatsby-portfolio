export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629966163a288a00bed5aa9a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oxrv5ikt',
                  apiId: '52b8c310-ef3e-44e3-93ce-0b4e18e7d195'
                },
                {
                  buildHookId: '629966173a288a01e6d5a466',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vuk13zof',
                  apiId: '53f42d14-c808-4671-8cf4-46a7dfc18754'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shubshinde/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vuk13zof.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

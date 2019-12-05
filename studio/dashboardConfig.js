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
                  buildHookId: '5de8cf22b3f99f083c1a7e7d',
                  title: 'Sanity Studio',
                  name: 'gsn-template-studio',
                  apiId: 'c34f6b3f-952b-4c49-a701-28db7f6e6969'
                },
                {
                  buildHookId: '5de8cf22b1e74b19a77b8dfd',
                  title: 'Portfolio Website',
                  name: 'gsn-template',
                  apiId: 'c7e93ef6-9d0b-45f8-a2b2-a882c314df1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lairdkruger/gsn-template',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gsn-template.netlify.com',
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

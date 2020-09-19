export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '5f664bbde593fdf0ded9cee6',
                  title: 'Sanity Studio',
                  name: 'saltymike-studio',
                  apiId: '1669cfb6-5a93-48f3-bb5c-99aa53eb8e06'
                },
                {
                  buildHookId: '5f664bbd6d590f4ebab7f7e5',
                  title: 'Blog Website',
                  name: 'saltymike',
                  apiId: 'c9217c56-8f95-435a-9bee-d8ae4acbe311'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/threesam/saltymike',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://saltymike.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

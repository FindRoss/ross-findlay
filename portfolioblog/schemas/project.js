export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'slug',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'slug',
    }, {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
}

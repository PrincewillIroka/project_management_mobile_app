const tasksState = {
  tasks: [
    {
      id: 1,
      projectId: 1,
      title: 'Dashboard Design',
      members: [
        {
          name: 'John Doe',
          photo:
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Ann Smith',
          photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
      ],
      progress: 15,
    },
    {
      id: 2,
      projectId: 1,
      title: 'Mobile App Design',
      members: [
        {
          name: 'Miriam Cooper',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jessica Leonard',
          photo:
            'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
      ],
      progress: 100,
    },
    {
      id: 3,
      projectId: 2,
      title: 'Wireframe Design',
      members: [
        {
          name: 'Baron Dunecr',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
    {
      id: 4,
      projectId: 2,
      title: 'A/B Testing',
      members: [
        {
          name: 'Jeff Atwood',
          photo:
            'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        },
        {
          name: 'Ferindah Yerstu',
          photo:
            'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      progress: 80,
    },
  ],
  selectedTask: {},
};

export default tasksState;

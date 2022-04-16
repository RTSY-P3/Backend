module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          body: `It's amazing not just magical!`,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: `I want to learn this kind of project! Teach me.`,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Alluring. So incredible.',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: `Woow, I didn't know you could do that`,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: `What a beautiful project, I think I'm crying. It's that cool.`,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Congratulations on finishing your projects',
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Super radiant dude',
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'This colour palette has navigated right into my heart.',
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'My 54 year old grandma rates this project very simple.',
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Just sublime, friend.',
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'This project blew my mind.',
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Revolutionary. Adore the use of lines and iconography!',
          userId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Let me take a nap... great animation, anyway.',
          userId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: `Mission accomplished. It's sublime!!`,
          userId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Appealing colour palette.',
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Great Post, love it',
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          title: 'The Sunset Limited',
          body: 'Perspiciatis illum illum et et error labore ut iure. Eius quidem eius placeat blanditiis in et deserunt. ',
          image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Fargo',
          body: 'Quaerat officia voluptatum officiis. Quae repudiandae quisquam veniam maxime qui. Rerum aut dolores voluptates corrupti modi ducimus pariatur error tempore.',
          image: 'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
         },
        {
          title: 'Reservoir Dogs',
          body: 'Tempora id non maxime. Qui qui dignissimos omnis adipisci qui. Voluptatibus ut labore est quisquam consequuntur fugiat harum tenetur est. Autem aliquid ut adipisci officia eos atque excepturi.',
          image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
        title: 'Everything, Everywhere All At Once',
        body: 'Quia sit architecto itaque voluptas aliquam. Sit aut laboriosam aspernatur dicta non consequatur qui recusandae. Dignissimos voluptatem labore praesentium.',
        image: 'https://i0.wp.com/www.thecosmiccircus.com/wp-content/uploads/2022/04/Screenshot_20220409_140938.jpg?fit=1195%2C591&ssl=1',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          title: 'The Matrix',
          body: 'Cupiditate eos ratione aperiam fuga temporibus. Ut nulla aliquid. Et ut et aut qui a ut ducimus ut. ',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Evil Dead',
          body: 'Quisquam at dolorem cupiditate enim ut recusandae porro aut quae. In nostrum et velit maiores dolores in architecto natus delectus. Aspernatur possimus libero velit omnis beatae. ',
          image: 'https://img.moviepostershop.com/the-evil-dead-movie-poster-1983-1020292502.jpg',
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Texas Chainsaw Massacre',
          body: 'In reprehenderit esse id ut quas cupiditate error sit. Eum nostrum libero facilis quis error consectetur.',
          image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          title: 'Hackers',
          body: 'Similique molestiae id officia corporis quidem. Aliquam et ut eos ut nemo est voluptatem. Possimus ut quo labore. Nihil enim fugit porro nam et quis sunt.',
          image: 'https://www.moviemem.com/wp-content/uploads/2021/12/HACKERSSuperHRws.jpg',
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Matrix Reloaded',
          body: 'Ut quidem et. Quo assumenda et cumque molestias atque sint qui modi.Vel quia consequatur aliquid corrupti qui libero.',
          image: 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Matrix Revolutions',
          body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
          image: 'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'King Richard',
          body: 'Repellendus et iste dolorem iste et perspiciatis occaecati vero eius. Vel ipsa officia quidem in maiores. Fugiat similique aliquam est eveniet ullam laborum qui. Et a maxime et magnam in.',
          image: 'https://pics.filmaffinity.com/King_Richard-738644259-large.jpg',
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'No Country For Old Men',
          body: 'Cupiditate voluptas cumque aspernatur. Adipisci voluptatibus vel eos. Voluptatem tempore doloribus architecto rem quidem quaerat ipsam possimus. ',
          image: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Beetlejuice',
          body: 'Repellat illo sunt cum. Maiores et iure. Accusantium eum quo ullam minus architecto aut nulla rerum. ',
          image: 'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          userId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Project Alpha',
          body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical',
          image: 'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          userId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'MIT TOP Secret',
          body: 'Cupiditate voluptas cumque aspernatur. Adipisci voluptatibus vel eos. Doloremque commodi aliquid occaecati quia provident.',
          image: 'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          userId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {})
  }
}
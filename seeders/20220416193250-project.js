module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          title: 'Gügle',
          body: 'Perspiciatis illum illum et et error labore ut iure. Eius quidem eius placeat blanditiis in et deserunt. ',
          image: 'https://www.fmsh.fr/sites/default/files/image/hacking-dea.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Le Tweets',
          body: 'Quaerat officia voluptatum officiis. Quae repudiandae quisquam veniam maxime qui. Rerum aut dolores voluptates corrupti modi ducimus pariatur error tempore.',
          image: 'https://techcrunch.com/wp-content/uploads/2015/01/hack.jpg?w=1000',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
         },
        {
          title: 'Libro del Faccia',
          body: 'Tempora id non maxime. Qui qui dignissimos omnis adipisci qui. Voluptatibus ut labore est quisquam consequuntur fugiat harum tenetur est. Autem aliquid ut adipisci officia eos atque excepturi.',
          image: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F08d8f1e6-18be-49b8-806a-c1d1b50b39e3.jpg?fit=scale-down&source=next&width=700',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Matrix',
          body: 'Cupiditate eos ratione aperiam fuga temporibus. Ut nulla aliquid. Et ut et aut qui a ut ducimus ut. ',
          image: 'https://media.wired.com/photos/5ca648a330f00e47fd82ae77/16:9/w_1391,h_782,c_limit/Culture_Matrix_Code_corridor.jpg',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'instaspam',
          body: 'Quisquam at dolorem cupiditate enim ut recusandae porro aut quae. In nostrum et velit maiores dolores in architecto natus delectus. Aspernatur possimus libero velit omnis beatae. ',
          image: 'https://www.esilo.com/wp-content/uploads/media-library/hooded-hacker-on-comupter-digital-brain-potential-blog-post-e1573366318920.jpg',
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Jumanji',
          body: 'In reprehenderit esse id ut quas cupiditate error sit. Eum nostrum libero facilis quis error consectetur.',
          image: 'https://www.tripwire.com/state-of-security/wp-content/uploads/sites/3/thumb_shutterstock_356278754_1024.jpg',
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          title: 'Mi Spazio',
          body: 'Similique molestiae id officia corporis quidem. Aliquam et ut eos ut nemo est voluptatem. Possimus ut quo labore. Nihil enim fugit porro nam et quis sunt.',
          image: 'https://images.newscientist.com/wp-content/uploads/2022/01/19100201/PRI_218353621.jpg?width=600',
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Matrix Reloaded',
          body: 'Ut quidem et. Quo assumenda et cumque molestias atque sint qui modi.Vel quia consequatur aliquid corrupti qui libero.',
          image: 'https://cdn.onebauer.media/one/media/6143/720d/4699/e024/45f2/95fc/the-matrix-reloaded-neo-architect.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Matrix Revolutions',
          body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
          image: 'https://images.squarespace-cdn.com/content/v1/59e512ddf43b55c29c71b996/1558098739818-F5VHIUH8E5F2U99SNLHJ/thematrixrevolutions.jpg',
          userId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'J-Pop 101',
          body: 'Repellendus et iste dolorem iste et perspiciatis occaecati vero eius. Vel ipsa officia quidem in maiores. Fugiat similique aliquam est eveniet ullam laborum qui. Et a maxime et magnam in.',
          image: 'https://www.channelfutures.com/files/2021/07/1-Evil-Hacker-877x432.jpg',
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Boomer Translator',
          body: 'Cupiditate voluptas cumque aspernatur. Adipisci voluptatibus vel eos. Voluptatem tempore doloribus architecto rem quidem quaerat ipsam possimus. ',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEPs6yVYOWkwqNSTb-rFaMl56qIgOrdLo7_ILL0Ly9Uwf5HBQgN4_P8zUpZdkavaiylo&usqp=CAU',
          userId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'James Webb Telescope Navigator',
          body: 'Repellat illo sunt cum. Maiores et iure. Accusantium eum quo ullam minus architecto aut nulla rerum. ',
          image: 'https://nypost.com/wp-content/uploads/sites/2/2022/03/china-hackers-1.jpg?quality=90&strip=all',
          userId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Project Alpha',
          body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical',
          image: 'https://www.securitymagazine.com/ext/resources/images/hacking-freepik.jpg?1623251337',
          userId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'MIT TOP Secret',
          body: 'Cupiditate voluptas cumque aspernatur. Adipisci voluptatibus vel eos. Doloremque commodi aliquid occaecati quia provident.',
          image: 'https://cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690__480.png',
          userId: 15,
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
          }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {})
  }
}
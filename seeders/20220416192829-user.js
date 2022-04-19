module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Wick',
          email: 'john@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fujii Jacek',
          email: 'fujike@codr.com',
          passwordDigest: '$ss!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dai Akira',
          email: 'dai@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hussein Alicia',
          email: 'alicia@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ray Allen',
          email: 'rallen@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kobe Bryant',
          email: 'kbryant@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Isa Garba',
          email: 'isag@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Feng Bongani',
          email: 'bogani@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Udo Noel',
          email: 'nelu@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Soto Mphon',
          email: 'soto@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rabiu Jesus',
          email: 'rabiu@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kanye West',
          email: 'kwest@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'J Cole',
          email: 'jcole@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'John Wick',
          email: 'john@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'John Wick',
          email: 'john@codr.com',
          passwordDigest: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
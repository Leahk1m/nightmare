'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 4,
        address: '5102 Talliston Ln.',
        city: 'Talliston',
        state: 'Great Dunmow',
        country: 'United Kingdom',
        name: 'The Haunted Bedroom at Talliston',
        price: 200,
        imageUrl: 'https://a0.muscache.com/im/pictures/de4c65f8-6e66-475b-a9cb-15cc0e236e4e.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        userId: 4,
        address: '6230 Phantom Dr.',
        city: 'Lava Hot Springs',
        state: 'Idaho',
        country: 'United States',
        name: 'Phantoms Lair',
        price: 218,
        imageUrl: 'https://a0.muscache.com/im/pictures/b0ea455b-893c-40a3-9f70-82a76d51a811.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '3102 Victorian Ave.',
        city: 'Ellicott City',
        state: 'Maryland',
        country: 'United States',
        name: 'Victorian Gothic Castle Mansion',
        price: 500,
        imageUrl: 'https://www.airbnb.com/rooms/16673443/photos/252833012?source_impression_id=p3_1646676815_CHeP4Ct%2FY7Lex88j',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        userId: 4,
        address: '109 Bowman Dr.',
        city: 'New Orleans',
        state: 'Louisiana',
        country: 'United States',
        name: 'Parks-Bowman Mansion: The Haunted Bedroom',
        price: 118,
        imageUrl: 'https://a0.muscache.com/im/pictures/396da7ff-8f3d-462a-a510-263a07f5288f.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),


      },

      {
        userId: 4,
        address: '1902 Enslin Ln.',
        city: 'Troy',
        state: 'New York',
        country: 'United States',
        name: 'Haunted Oasis',
        price: 470,
        imageUrl: 'https://a0.muscache.com/im/pictures/0b8de04b-ce6c-4413-85a7-66bcabdd04b5.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        userId: 4,
        address: '2983 Manor Ave.',
        city: 'Saint Paul',
        state: 'Minnesota',
        country: 'United States',
        name: 'The Manor',
        price: 700,
        imageUrl: 'https://a0.muscache.com/im/pictures/3413475/09dbaeb6_original.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '670 Stoney Ln.',
        city: 'Charleston',
        state: 'South Carolina',
        country: 'United States',
        name: 'The Stone House',
        price: 300,
        imageUrl: 'https://a0.muscache.com/im/pictures/bb7e9359-09d9-4fae-a233-cb2b127f9bc4.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '1009 Chamber Dr.',
        city: 'Syracuse',
        state: 'New York',
        country: 'United States',
        name: 'The Chamber Apartment',
        price: 180,
        imageUrl: 'https://a0.muscache.com/im/pictures/07e099a3-6762-4bf3-977e-47665b01b83c.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '8 Via Visconti',
        city:'Oleggio Castello',
        state: 'Novara',
        country: 'Italy',
        name: 'Castello Dal Pozzo',
        price: 600,
        imageUrl: 'https://imgix.bustle.com/uploads/image/2018/9/27/27aa8ba7-1322-4955-838e-84b598589221-castello.jpg?w=632&fit=crop&crop=faces&auto=format%2Ccompress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '902 Highlands Dr.',
        city: 'Denver',
        state: 'Colorado',
        country: 'United States',
        name: 'Highlands Mansion',
        price: 300,
        imageUrl: 'https://scarebnb.rentals/assets/images/image25.jpg?v=18af5830',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '8931 Truth St.',
        city: 'Truth or Consequences',
        state: 'New Mexico',
        country: 'United States',
        name: 'Home in NM Ghosttown',
        price: 600,
        imageUrl: 'https://scarebnb.rentals/assets/images/image26.jpg?v=18af5830',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

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
        userId: 5,
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
        imageUrl: 'https://circaoldhouses.com/wp-content/uploads/2020/01/50-Crows-Nest-Road-Bronxville-NY-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        userId: 5,
        address: '130 State Lane',
        city: 'Rocky Mount',
        state: 'North Carolina',
        country: 'United States',
        name: 'Boo and Breakfast',
        price: 420,
        imageUrl: 'https://www.pufikhomes.com/wp-content/uploads/2019/04/stylish-swedish-cottage-in-dark-tones-pufikhomes-3.jpg',
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
        userId: 5,
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
        imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-10454498/original/537b7b3b-e681-4423-a5c6-a6afb74ebf5b.jpeg?im_w=720',
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
        imageUrl: 'https://cdn.pixabay.com/photo/2017/03/30/04/14/house-2187170_960_720.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 5,
        address: '1009 Chamber Dr.',
        city: 'Syracuse',
        state: 'New York',
        country: 'United States',
        name: 'The Chamber Apartment',
        price: 180,
        imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-10454498/original/65af793c-495b-4372-bef2-0618854e8dd9.jpeg?im_w=1200',
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
        imageUrl: 'https://a0.muscache.com/im/pictures/b0d1ab60-1bca-45cc-8456-70ab6cb4cf5e.jpg?im_w=720',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '681 Sunset Dr.',
        city: 'Mountain View',
        state: 'California',
        country: 'United States',
        name: 'Ghostly Bedroom',
        price: 85,
        imageUrl: 'https://a0.muscache.com/im/pictures/afe940a3-9595-4def-9b64-7881a90dfee0.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '7117 Manchester Court',
        city: 'Milville',
        state: 'New Jersey',
        country: 'United States',
        name: 'Unholy Boudoir',
        price: 300,
        imageUrl: 'https://a0.muscache.com/im/pictures/de1caf7f-57b1-490b-b4d4-a4c1514398a2.jpg?im_w=1200',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '350 Miles Lane',
        city: 'Newport News',
        state: 'Virginia',
        country: 'United States',
        name: "The Flying Dutchman's",
        price: 500,
        imageUrl:'https://a0.muscache.com/im/pictures/miso/Hosting-10454498/original/bdb614c1-6141-49af-9aa2-7bea43d6f966.jpeg?im_w=720',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        userId: 4,
        address: '9914 Tanglewood Dr.',
        city: 'Wilmington',
        state: 'Massachusetts',
        country: 'United States',
        name: 'Travelling Circus Camp',
        price: 350,
        imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-10454498/original/9b803622-84a1-47b8-8388-2e85c8d7ac3c.jpeg?im_w=720',
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

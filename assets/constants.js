export const INSTAGRAM_USERNAME = 'Ayush Palak';
export const INSTAGRAM_USERID = 'ayush_palak';
export const INSTAGRAM_PROFILE_IMAGE_SOURCE = (() => require('./profilepic.jpeg'))();
export const INSTAGRAM_PROFILE_IMAGE_SOURCE_URI = 'https://media-exp1.licdn.com/dms/image/C5103AQGKJeNaXiT62A/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=hQmT_HcIzXqN4Aay_pEQHyTb__cT_s1CAth_t6GgVb0';
export const NUMBER_OF_FOLLOWERS = '12B';
export const NUMBER_OF_FOLLOWING = '1.1M';
export const USER_BIO = 'Life is a journey towards it\'s end. We have to live with the choices we make. What will you choose when you don\'t have choices.';
export const USER_IMAGES = [
  'https://wallpapercave.com/wp/GalRdmI.jpg',
  'https://wallpaperset.com/w/full/0/d/8/200509.jpg',
  'https://cache.desktopnexus.com/thumbseg/375/375007-bigthumbnail.jpg',
  'https://cdn.wallpapersafari.com/51/19/8wtgdQ.jpg',
  'https://image.winudf.com/v2/image/Y29tLkhEV2FsbHBhcGVyLmN1dGVsaXR0bGVwdXBweV9zY3JlZW5fM18xNTIzMjM3MDM2XzAwNg/screen-3.jpg?fakeurl=1&type=.jpg',
  'https://wallpaperstream.com/wallpapers/full/cute-puppy/Cute-Two-Puppies-Wallpaper-HD.jpg',
  'https://images5.alphacoders.com/466/thumb-1920-466168.jpg',
  'https://avante.biz/wp-content/uploads/Puppies-Wallpaper/Puppies-Wallpaper-047.jpg',
  'https://moderndogmagazine.com/sites/default/files/images/uploads/wallpapers/yorkie_1600x1200.jpg',
  'https://wallpaperaccess.com/full/1708591.jpg',
  'https://www.dogbreedslist.info/dog-wallpapers/Golden-Retriever-puppy-lying-muzzle-400x225.jpg',
  'https://pbs.twimg.com/profile_images/928213517076803584/AMjTNO3t_400x400.jpg',
  'https://i.pinimg.com/originals/09/df/f2/09dff222d763d10bebcde24c519bae81.jpg',
  'https://www.womansworld.com/wp-content/uploads/2017/10/puppy-eyes.jpg',
  'https://avatars0.githubusercontent.com/u/25946878?s=460&u=4387111f1b92df66715f3ebac39d4f702226595f&v=4',
];
export const NUMBER_OF_POSTS = USER_IMAGES.length;


export const USER_IMAGES_WITH_PROP = [
  {
    url: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likedBy: ['ayush_palak', 'priya.tk'],
    caption: 'The best place to go.',
    comments: [
      {
        user: 'abhinnov',
        comment: 'Nice pic dear. :)',
        likes: 100,
        timestamp: '5w',
      },
      {
        user: 'painter',
        comment: 'WoW. OMG!',
        likes: 13,
        timestamp: '5w',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/691637/pexels-photo-691637.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500,',
    likedBy: ['ayush_palak', 'priya.tk'],
    caption: 'Much awaited trip.',
    comments: [
      {
        user: 'abhinnov',
        comment: 'Beautiful',
        likes: 3,
        timestamp: '1d',
      },
      {
        user: 'painter',
        comment: 'amazing!',
        likes: 32,
        timestamp: '1m',
      },
      {
        user: 'kabir', comments: 'nice', likes: 33, timestamp: '2h',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['ayush_palak', 'priya.tk', 'adarshita.98'],
    caption: 'sunsets are beautiful :)',
    comments: [
      {
        user: 'priya.tk',
        comment: 'Indeed',
        likes: 13,
        timestamp: '20w',
      },
      {
        user: 'aman022',
        comment: 'yes they are!',
        likes: 39,
        timestamp: '2d',
      },
      {
        user: 'carl_johnnson',
        comments: 'wow!',
        likes: 4,
        timestamp: '3d',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['merry1612', 'amit.88', 'pooja_00'],
    caption: 'who else loves donuts?',
    comments: [
      {
        user: 'pooja_00', comment: 'me :D', likes: 45, timestamp: '2d',
      },
      {
        user: 'amit.88',
        comment: 'they are too sugary',
        likes: 49,
        timestamp: '2w',
      },
      {
        user: 'itshennry',
        comments: 'not me!',
        likes: 48,
        timestamp: '3h',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['daniel56', 'priya.tk', 'harryjames'],
    caption: 'best concert :D',
    comments: [
      {
        user: 'abhinnov',
        comment: 'I attended it too :D',
        likes: 54,
        timestamp: '1m',
      },
      {
        user: 'adarshita_90',
        comment: 'yeah',
        likes: 94,
        timestamp: '2h',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['larajean', 'steve', 'kendal5656'],
    caption: 'A cup of coffee is all you need for a hectic day...',
    comments: [
      {
        user: 'steve', comment: 'yes :D', likes: 14, timestamp: '1w',
      },
      {
        user: 'kabir',
        comment: 'exactly...:D',
        likes: 84,
        timestamp: '20w',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/346766/pexels-photo-346766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['ayush_palak', 'harryjames', 'steve', 'larajean'],
    caption: 'what a beautiful day!',
    comments: [
      {
        user: 'abhinnov',
        comment: 'nice weather',
        likes: 77,
        timestamp: '2d',
      },
      {
        user: 'steve', comment: ':D', likes: 74, timestamp: '3m',
      },
      {
        user: 'harryjames',
        comments: 'beautiful',
        likes: 57,
        timestamp: '2d',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['lauren_warren', 'edd_warren', 'steve', 'jake00', 'chuck_bass'],
    caption: 'Stop the time, go rewind.',
    comments: [
      {
        user: 'vintage_elia',
        comment: 'took me back to the 80s :)',
        likes: 70,
        timestamp: '1m',
      },
      {
        user: 'steve',
        comment: 'miss my childhood',
        likes: 57,
        timestamp: '20w',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['lea_1212', 'itszedd', 'kabir', 'harry', 'the_duches'],
    caption: 'Home decor completed!',
    comments: [
      {
        user: 'harry', comment: 'woah!', likes: 67, timestamp: '20w',
      },
      {
        user: 'steve',
        comment: 'it looks great.',
        likes: 57,
        timestamp: '1h',
      },
    ],
  },
  {
    url: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    likedBy: ['lauren_warren', 'edd_warren', 'steve', 'jake00', 'chuck_bass'],
    caption: 'NYC is mesmerizing',
    comments: [
      {
        user: 'blair_waldorf',
        comment: 'yes! my grandparents live there.',
        likes: 337,
        timestamp: '3m',
      },
      {
        user: 'steve',
        comment: 'I am planning to visit there.',
        likes: 997,
        timestamp: '2m',
      },
    ],
  },
];

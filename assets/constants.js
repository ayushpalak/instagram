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
    url: 'https://wallpapercave.com/wp/GalRdmI.jpg',
    likedBy: ['ayush_palak', 'priya.tk'],
    caption: 'The best place to go.',
    comments: [{
      user: 'abhinnov',
      comment: 'Nice pic dear. :)',
    }, {
      user: 'painter',
      comment: 'WoW. OMG!',
    }],
  }, {
    url: 'https://wallpaperset.com/w/full/0/d/8/200509.jpg,',
    likedBy: ['ayush_palak', 'priya.tk'],
    caption: 'Much awaited trip.',
    comments: [{
      user: 'abhinnov',
      comment: 'Beautiful',
    }, {
      user: 'painter',
      comment: 'amazing!',
    }, {
      user: 'kabir',
      comments: 'nice',
    }],
  }, {
    url: 'https://cache.desktopnexus.com/thumbseg/375/375007-bigthumbnail.jpg',
    likedBy: ['ayush_palak', 'priya.tk', 'adarshita.98'],
    caption: 'sunsets are beautiful :)',
    comments: [{
      user: 'priya.tk',
      comment: 'Indeed',
    }, {
      user: 'aman022',
      comment: 'yes they are!',
    }, {
      user: 'carl_johnnson',
      comments: 'wow!',
    }],
  }, {
    url: 'https://cdn.wallpapersafari.com/51/19/8wtgdQ.jpg',
    likedBy: ['merry1612', 'amit.88', 'pooja_00'],
    caption: 'who else loves donuts?',
    comments: [{
      user: 'pooja_00',
      comment: 'me :D',
    }, {
      user: 'amit.88',
      comment: 'they are too sugary',
    }, {
      user: 'itshennry',
      comments: 'not me!',
    }],
  }, {
    url: ' https://image.winudf.com/v2/image/Y29tLkhEV2FsbHBhcGVyLmN1dGVsaXR0bGVwdXBweV9zY3JlZW5fM18xNTIzMjM3MDM2XzAwNg/screen-3.jpg?fakeurl=1&type=.jpg',
    likedBy: ['daniel56', 'priya.tk', 'harryjames'],
    caption: 'best concert :D',
    comments: [{
      user: 'abhinnov',
      comment: 'I attended it too :D',
    }, {
      user: 'adarshita_90',
      comment: 'yeah',
    }],
  }, {
    url: 'https://wallpaperstream.com/wallpapers/full/cute-puppy/Cute-Two-Puppies-Wallpaper-HD.jpg',
    likedBy: ['larajean', 'steve', 'kendal5656'],
    caption: 'A cup of coffee is all you need for a hectic day...',
    comments: [{
      user: 'steve',
      comment: 'yes :D',
    }, {
      user: 'kabir',
      comment: 'exactly...:D',
    }],
  }, {
    url: 'https://images5.alphacoders.com/466/thumb-1920-466168.jpg',
    likedBy: ['ayush_palak', 'harryjames', 'steve', 'larajean'],
    caption: 'what a beautiful day!',
    comments: [{
      user: 'abhinnov',
      comment: 'nice weather',
    }, {
      user: 'steve',
      comment: ':D',
    }, {
      user: 'harryjames',
      comments: 'beautiful',
    }],
  }, {
    url: ' https://avante.biz/wp-content/uploads/Puppies-Wallpaper/Puppies-Wallpaper-047.jpg',
    likedBy: ['lauren_warren', 'edd_warren', 'steve', 'jake00', 'chuck_bass'],
    caption: 'Stop the time, go rewind.',
    comments: [{
      user: 'vintage_elia',
      comment: 'took me back to the 80s :)',
    }, {
      user: 'steve',
      comment: 'miss my childhood',
    }],
  },
  {
    url: 'https://moderndogmagazine.com/sites/default/files/images/uploads/wallpapers/yorkie_1600x1200.jpg',
    likedBy: ['lea_1212', 'itszedd', 'kabir', 'harry', 'the_duches'],
    caption: 'Home decor completed!',
    comments: [{
      user: 'harry',
      comment: 'woah!',
    }, {
      user: 'steve',
      comment: 'it looks great.',
    }],
  },
  {
    url: 'https://wallpaperaccess.com/full/1708591.jpg',
    likedBy: ['lauren_warren', 'edd_warren', 'steve', 'jake00', 'chuck_bass'],
    caption: 'NYC is mesmerizing',
    comments: [{
      user: 'blair_waldorf',
      comment: 'yes! my grandparents live there.',
    }, {
      user: 'steve',
      comment: 'I am planning to visit there.',
    }],
  },
];

/* GET 'about' page */
module.exports.about = function(req, res){
  const content = "Welcome to our exquisite world of curated getaways! At Explore Inn, we're your passport to unforgettable experiences amidst nature's embrace. Discover a handpicked selection of idyllic farmhouses, luxurious resorts, and charming lodges that beckon you to unwind and rejuvenate. Our mission is to transform your travel dreams into reality, crafting tailored escapes that resonate with your desires. Immerse yourself in the serenity of lush landscapes, indulge in local flavors, and create cherished memories with loved ones. Let us guide you on a journey of tranquility and adventure, as you embark on a voyage of discovery with every booking.";
  res.render('generic-text', { title: 'About', content: content });
};
  
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
  }
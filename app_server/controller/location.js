module.exports.homeList= function(req, res){
    res.render('location-list',{
        title: 'Find it out - find a place to Enjoy Vacation',
        pageHeader: {
            title: 'Find it out',
            strapline: 'find a place to Enjoy Vacation'
        },
        sidebar: "Looking for staycation?Here we have bought you an all together website where you can get details of different staycations",
        locations: [{
            name: 'Oak Wood',
            address: 'venkatapuram,hyd',
            rating: 3,
            facilities: ['private pool','free wifi','parking available','pet friendly'],
            distance: '10km',
            href:'/location'
        }, {
            name: 'Brown Town',
            address: 'Kanakamadi village,hyderabad',
            rating: 4,
            facilities: ['private pool','free wifi','Breakfast complimentary','pet friendly'],
            distance: '20km',
            href:'/location2'
        }, {
            name: 'Palm Exotica',
            address: 'Shankarpally,hyderabad',
            rating: 2,
            facilities: ['private pool','premium wifi','Luxurious Suites','Wild Waters'],
            distance: '25km',
            href:'/location3'
        }]
    });
};
//locationInfo//
module.exports.locationInfo= function(req,res){
    res.render('location-info', {
        title: 'Oak Wood',
        pageHeader: {
            title: 'Oak Wood'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Oak Wood',
            address: 'venkatapuram,hyd',
            rating: 3,
            facilities: ['private pool','free wifi','parking available','pet friendly'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            checkin : '2pm',
            checkout : '11am',
            price : '25000/-night\naccomodation\n 20 people',
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }]
            },
        });
    };

//locationInfo2//
module.exports.locationInfo2= function(req,res){
    res.render('location-info2', {
        title: 'Brown Town',
        pageHeader: {
            title: 'Brown Town'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Brown Town',
            address: 'Kanakamadi village,hyderabad',
            rating: 4,
            facilities: ['private pool','free wifi','Breakfast complimentary','pet friendly'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            checkin : '2pm',
            checkout : '11am',
            price : '25000/-night\naccomodation\n 20 people',
          
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }]
            },
        });
    };
module.exports.locationInfo3= function(req,res){
    res.render('location-info3', {
        title:'Palm Exotica',
        pageHeader: {
            title: 'Palm Exotica'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Palm Exotica',
            address: 'Shankarpally,hyderabad',
            rating: 2,
            facilities: ['private pool','premium wifi','Luxurious Suites','Wild Waters'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            checkin : '2pm',
            checkout : '11am',
            price : '25000/-night\naccomodation\n 20 people',

    
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place.Every moment spent here was amazing.'
            }]
        }
    });
};
//addReview// 
module.exports.addReview= function(req,res){
    res.render('location-review-form', {
        title:'Review Oak Wood',
        pageHeader: {
            title: 'Review Oak Wood'
        }
    });
};

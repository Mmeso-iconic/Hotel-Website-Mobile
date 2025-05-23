//THE WHY CHOOSE US SECTION
const whychooseus = [
    {
        title: 'Payment methods',
        paragraph: 'We have a lot of them, from cryptocurrencies to barter for potatoes',
        Image: 'Assets/images/paymenticon.png'
    },
    {
        title: 'Simple search process',
        paragraph: "We checked it out, even the kid did it, but it was my mom's friend's son",
        Image: 'Assets/images/Searchicon.png'
    },
    {
        title: '24/7 Support',
        paragraph: "Is there something you don't understand? Feel free to call us. Phone number in the footer",
        Image: 'Assets/images/247icon.png'
    },
    {
        title: 'We are nice',
        paragraph: 'Fantasy is over, there will be something really convincing here',
        Image: 'Assets/images/nicecaticon.png'
    }
];

const renderWhyChooseUs = whychooseus => {
    const container = document.getElementById('whyussection');
        whychooseus.forEach(item => {
        container.innerHTML += `
            <div class ="Whychooseus">
                <img src="${item.Image}" alt="${item.title}" className ="why-icon">
                <h3 class="header_h3" >${item.title}</h3>
                <p class="header_para">${item.paragraph}</p>
            </div>
        `;
    })
}
renderWhyChooseUs(whychooseus);


//THE SPECIAL OFFERS SECTION

const specialOffers = [
    {
        ratingimg1: 'Assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'Assets/icons/RatingStar.svg',
        ratingnum: '4.8',
        faveimage: 'Assets/icons/favbtn_icon.svg',
        favecircle: 'Assets/icons/Favbtn-circle.svg',
        offerimage: 'Assets/images/Hotel_Bedroom1.png',
        Caption: 'Wilderness Club at Big Ceddar',
        date: '28 October — 1 November',
        price: '$2016',
        period: '/6 nights'
    },
    {
        ratingimg1: 'Assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'Assets/icons/RatingStar.svg',
        ratingnum: '4.8',
        faveimage: 'Assets/icons/favbtn_icon.svg',
        favecircle: 'Assets/icons/Favbtn-circle.svg',
        offerimage: 'Assets/images/Hotel_Bedroom2.png',
        Caption: 'Wilderness Club at Big Ceddar',
        date: '28 October — 1 November',
        price: '$2016',
        period: '/6 nights'
    },
    {
        ratingimg1: 'Assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'Assets/icons/RatingStar.svg',
        ratingnum: '4.8',
        faveimage: 'Assets/icons/favbtn_icon.svg',
        favecircle: 'Assets/icons/Favbtn-circle.svg',
        offerimage: 'Assets/images/Hotel_Bedroom3.png',
        Caption: 'Wilderness Club at Big Ceddar',
        date: '28 October — 1 November',
        price: '$2016',
        period: '/6 nights'
    },
];
const renderSpecialOffers = specialOffers => {
    const container = document.getElementById('specialoffersection');
        specialOffers.forEach(offer => {
        container.innerHTML += `
            <div class = "specialoffers">
                <div class = "offerimages"  style="background-image: url(${offer.offerimage})">
                    <div>
                        <img src="${offer.ratingimg1}" alt="${offer.Caption}" class ="ratingrectangle">
                        <div class="rating">
                            <img src="${offer.ratingimg2}" alt="${offer.Caption}" class ="ratingstar">
                            <p class ="ratingnum">${offer.ratingnum}</p>
                        </div>
                    </div>
                    <div class="offer_fav">
                        <img src="${offer.faveimage}" alt="${offer.Caption}" class ="Faveicon">
                        <img src="${offer.favecircle}" alt="${offer.Caption}" class ="Faveicon_bg">
                    </div>                
                </div>
                <h3 class="header_h3">${offer.Caption}</h3>
                <p class="header_para">${offer.date}</p>
                <div class="price_period">
                    <p class="offer_price">${offer.price}</p>
                    <p class="offer_period">${offer.period}</p>
                </div>
            </div>
        `;
    })
}

renderSpecialOffers(specialOffers);


// REVIEWS
const reviews = [
    {
        customer: 'Assets/images/Customer1.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'Jannike Borg',
        customer_career: ', Publisher'
    },
    {
        customer: 'Assets/images/Customer2.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'LeBron Durant',
        customer_career: ', Flight attendant'
    },
    {
        customer: 'Assets/images/Customer3.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'Kaarel Piho',
        customer_career: ', Chiropodist'
    }
];

const renderReviews = reviews => {
    const container = document.getElementById('the_reviews');
        reviews.forEach(review => {
        container.innerHTML += `
                <div class = "customer_reviews">
                    <img src="${review.customer}" alt="${review.customer_name}" class ="customer_image">
                    <div>
                        <p class="header_para">${review.customer_review}</p>
                        <p class="customer_name">${review.customer_name}<span class="customer_title">${review.customer_career}</span></p>
                    </div>
                </div>
        `;
    })
}

renderReviews(reviews);



const recentPosts = [
    {
        postimage: 'Assets/images/post_image1.png',
        postdate: 'May 23, 2022',
        posticon: 'Assets/icons/Time.svg',
        posttime: '5 minutes',
        postcaption: 'My trip to Athens',
        postcontent: 'It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...'
    },
    {
        postimage: 'Assets/images/post_image2.png',
        postdate: 'May 23, 2022',
        posticon: 'Assets/icons/Time.svg',
        posttime: '1 minute',
        postcaption: 'Vilnius resorts',
        postcontent: 'I haven\'t seen any resorts in Vilnius, but there are wonderful people and pubs'
    },
    {
        postimage: 'Assets/images/post_image3.png',
        postdate: 'May 23, 2022',
        posticon: 'Assets/icons/Time.svg',
        posttime: '15 minutes',
        postcaption: 'Tips for flying on a plane',
        postcontent: 'If you have a fear of flying, here\'s a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you'
    }
];

const renderRecentPost = recentPosts => {
    const container = document.getElementById('recentpostsection');
        recentPosts.forEach(post => {
        container.innerHTML += `
                <div class="recentPosts">
                    <img src="${post.postimage}" alt="${post.postcaption}" className ="post-img">
                    <div class="posttext-division">
                        <div class="postdate_time">
                            <p class="postdate">${post.postdate}</p>
                            <div class="posttime">
                                <img src="${post.posticon}" alt="${post.postcaption}" className ="time-icon">   
                                <p class="post_timing">${post.posttime}</p> 
                            </div>
                        </div>
                        <h3 class="header_h3">${post.postcaption}</h3>
                        <p class="header_para">${post.postcontent}</p>
                    </div>
                </div>
        `;
        })
}

renderRecentPost(recentPosts);



document.addEventListener("DOMContentLoaded", function () {
    const openMenuIcon = document.getElementById('openMenu');   // hamburger
    const closeMenuIcon = document.getElementById('closeMenu'); // close icon
    const mobileMenu = document.getElementById('main_mobile_menu');

    if (openMenuIcon && closeMenuIcon && mobileMenu) {
        openMenuIcon.addEventListener('click', () => {
            mobileMenu.classList.add('active'); // slide in
        });

        closeMenuIcon.addEventListener('click', () => {
            mobileMenu.classList.remove('active'); // slide out
        });
    }
});


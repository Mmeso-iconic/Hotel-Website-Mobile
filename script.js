//THE WHY CHOOSE US SECTION
const whychooseus = [
    {
        title: 'Payment methods',
        paragraph: 'We have a lot of them, from cryptocurrencies to barter for potatoes',
        Image: 'assets/images/paymenticon.png'
    },
    {
        title: 'Simple search process',
        paragraph: "We checked it out, even the kid did it, but it was my mom's friend's son",
        Image: 'assets/images/searchicon.png'
    },
    {
        title: '24/7 Support',
        paragraph: "Is there something you don't understand? Feel free to call us. Phone number in the footer",
        Image: 'assets/images/247icon.png'
    },
    {
        title: 'We are nice',
        paragraph: 'Fantasy is over, there will be something really convincing here',
        Image: 'assets/images/nicecaticon.png'
    }
];

const renderWhyChooseUs = whychooseus => {
    const container = document.getElementById('whyussection');
        whychooseus.forEach(item => {
        container.innerHTML += `
            <div class ="Whychooseus">
                <img src="${item.Image}" alt="${item.title}" className ="why-icon">
                <h3>${item.title}</h3>
                <p>${item.paragraph}</p>
            </div>
        `;
    })
}
renderWhyChooseUs(whychooseus);


//THE SPECIAL OFFERS SECTION

const specialOffers = [
    {
        ratingimg1: 'assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'assets/icons/Ratingstar.svg',
        ratingnum: 'assets/icons/4.8.svg',
        Caption: 'Wilderness Club at Big Ceddar',
        date: '28 October — 1 November',
        price: '$2016',
        period: '/6 nights'
    },
    {
        ratingimg1: 'assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'assets/icons/Ratingstar.svg',
        ratingnum: 'assets/icons/4.8.svg',
        Caption: 'Wilderness Club at Big Ceddar',
        date: '28 October — 1 November',
        price: '$2016',
        period: '/6 nights'
    },
    {
        ratingimg1: 'assets/icons/Rating_Rectangle.svg',
        ratingimg2: 'assets/icons/Ratingstar.svg',
        ratingnum: 'assets/icons/4.8.svg',
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
                <img src="${offer.ratingimg1}" alt="${offer.Caption}" className ="ratingrectangle">
                <img src="${offer.ratingimg2}" alt="${offer.Caption}" className ="ratingstar">
                <img src="${offer.ratingnum}" alt="${offer.Caption}" className ="ratingnum">
                <h3>${offer.Caption}</h3>
                <p>${offer.date}</p>
                <div class="price_period">
                    <p>${offer.price}</p>
                    <p>${offer.period}</p>
                </div>
            </div>
        `;
    })
}

renderSpecialOffers(specialOffers);


// REVIEWS
const reviews = [
    {
        customer: 'assets/Images/customer1.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'Jannike Borg, Publisher'
    },
    {
        customer: 'assets/Images/customer2.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'LeBron Durant, Flight attendant'
    },
    {
        customer: 'assets/Images/customer3.png',
        customer_review: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
        customer_name: 'Kaarel Piho, Chiropodist'
    }
];

const renderReviews = reviews => {
    const container = document.getElementById('reviewsection');
        reviews.forEach(review => {
        container.innerHTML += `
            <div class = "reviews">
                <img src="${reviews.customer}" alt="${offer.customer_name}" className ="ratingrectangle">
                <div>
                    <p>${reviews.customer_review}</p>
                    <p>${reviews.customer_name}</p>
                </div>
            </div>
        `;
    })
}

renderReviews(reviews);
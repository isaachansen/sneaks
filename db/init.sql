CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);


INSERT INTO user (email, password)
VALUES
("test@test.com", "loser");

CREATE TABLE inventory (
    shoe_id SERIAL PRIMARY KEY,
    shoe_brand VARCHAR(64) NOT NULL
    shoe_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    image TEXT NOT NULL,
    description VARCHAR(200)
);

INSERT INTO inventory (shoe_brand, shoe_name, price, image)
VALUES
('Vans', 'Old Skool', 60, 'https://stockx.imgix.net/Vans-Old-Skool-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1545972492'),
('Vans', 'Slip-On', 45, 'https://stockx.imgix.net/Vans-Slip-On-True-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1562163076'),
('Vans', 'Authentic', 45, 'https://stockx.imgix.net/Vans-Authentic-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571847217'),
('Vans', 'Sk8-Hi', 60, 'https://stockx.imgix.net/Vans-Sk8-Hi-Black-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566530956'),
('Vans', 'Authentic', 55, 'https://stockx.imgix.net/Vans-Authentic-Checkerboard.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'),
('Nike', 'Air Force 1', 95, 'https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561409052'),
('Nike', 'Air Force 1', 120, 'https://stockx.imgix.net/Nike-Air-Force-1-Low-Day-of-the-Dead-2019.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568774633'),
('Nike', 'Blazer Mid', 105, 'https://stockx.imgix.net/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1555968287'),
('Nike', 'Dunk Low', 210, 'https://stockx.imgix.net/Nike-SB-Dunk-Low-Parra-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1563817215'),
('Nike', 'VaporMax Plus', 160, 'https://stockx.imgix.net/Nike-Air-VaporMax-Plus-Triple-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'),
('Adidas', 'Yeezy Boost 350 V2', 320, 'https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1559748037'),
('Adidas', 'Yeezy Boost 350 V2', 270, 'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1539789713'),
('Adidas', 'Ultra Boost 4.0', 80, 'https://stockx.imgix.net/adidas-Ultra-Boost-4-Black-White-Speckle-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1562081051'),
('Adidas', 'NMD R1', 150, 'https://stockx.imgix.net/adidas-NMD-R1-Japan-Black-2019-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1561403364'),
('Adidas', 'Stan Smith', 50, 'https://stockx.imgix.net/Adidas-Stan-Smith-White-Green-OG-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1546582297'),
('Adidas', 'NMD R1', 120, 'https://stockx.imgix.net/adidas-NMD-CS1-Bold-Branding-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1556254940'),
('Air Jordan', 'Jordan 1 Retro', 200, 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Fearless-UNC-Chicago.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570729078'),
('Air Jordan', 'Jordan 1 Retro', 170, 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1565708126'),
('Air Jordan', 'Jordan 6 Retro - Travis Scott', 390, 'https://stockx.imgix.net/Air-Jordan-6-Retro-Travis-Scott-GS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568078720'),
('Air Jordan', 'Jordan 1 Retro - Travis Scott', 760, 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1550180948'),
('Air Jordan', 'Jordan 1 Retro', 140, 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Black-Hyper-Pink-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1554079804'),
('Air Jordan', 'Jordan 1 Retro - Off White', 2890, 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Off-White-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'),
('Converse', 'Chuck Taylor - PLAY', 135, 'https://stockx.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-Des-Garcons-PLAY-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1546586502'),
('Converse', 'Chuck Taylor All-Star', 140, 'https://stockx.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-le-Fleur-Flames.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1568691768'),
('Converse', 'Chuck Taylor All-Star', 390, 'https://stockx.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1539027493'),
('Converse', 'Chuck Taylor - PLAY', 135, 'https://stockx.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-Play-Multi-Heart-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1566849904'),
('Converse', 'Chuck Taylor All-Star', 1800, 'https://stockx.imgix.net/Converse-Chuck-Taylor-All-Star-Hi-Off-White-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256'),
('Gucci', 'Ace', 512, 'https://stockx.imgix.net/Gucci-Ace-Embroidered-Snake-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1562948358'),
('Gucci', 'Ace', 565, 'https://stockx.imgix.net/Gucci-Ace-Bee.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1571162010'),
('Gucci', 'Pool Slides', 180, 'https://stockx.imgix.net/Gucci-Pursuit-Pool-Slides-White.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1570216457'),
('Balenciaga', 'Speed Trainer', 600, 'https://stockx.imgix.net/Balenciaga-Speed-Trainer-Black-White-2018-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1546679352'),
('Balenciaga', 'Triple S', 599, 'https://stockx.imgix.net/Balenciaga-Triple-S-Clear-Sole-Black-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1554225788'),
























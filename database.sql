CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/Ferrari_Enzo.jpeg', 'Ferrari', 'This is a Ferrari Enzo!'),
('images/Lamborghini_Aventador.jpeg', 'Lamborghini', 'This is a Lamborghini Aventador!'),
('images/Porsche_GT3.webp', 'Porsche', 'This is a Porsche 911 GT3 RS!');
  
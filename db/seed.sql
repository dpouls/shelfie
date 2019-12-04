create table shelfie_products (
id serial primary key,
product_name varchar(100) not null,
price numeric not null,
image text
)

select * from shelfie_products

insert into shelfie_products (product_name, price, image)
values ('C-3PO',47000,'https://cdn3.movieweb.com/i/article/9eIsTJMJ8mQ6rOqYYgfuv1G12wkn8v/1200:100/Star-Wars-9-Anthony-Daniels-C3po-Wrapped.jpg'),
('R2-D2', 99000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI31h-ZxIpczrUwkXXVvTHO9CmcjAKhSZauRRGgOe10ucNeAos&s')
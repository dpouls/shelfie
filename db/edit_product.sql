update shelfie_products
set product_name = ($1), price = ($2), image = ($3)
where id = ($4);
select * from shelfie_products;
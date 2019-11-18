delete from cart
where cart_id = $1
AND user_id = $2;

SELECT * FROM inventory sh
JOIN cart ct 
ON (ct.shoe_id = sh.shoe_id)
WHERE user_id = $2;
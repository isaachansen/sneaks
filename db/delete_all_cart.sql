delete from cart
WHERE user_id = $1;

SELECT * FROM inventory sh
JOIN cart ct 
ON (ct.shoe_id = sh.shoe_id)
WHERE user_id = $1;
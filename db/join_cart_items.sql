SELECT * FROM inventory sh
JOIN cart ct 
ON (ct.shoe_id = sh.shoe_id)
WHERE user_id = $1;

-- SELECT shoe_id
-- from cart
-- WHERE user_id = $1
INSERT INTO users (email, username, password)
VALUES ($1, $2, $3);

SELECT email, username FROM users
WHERE email = $1;
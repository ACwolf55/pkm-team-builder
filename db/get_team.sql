INSERT INTO pkm_users
(team_name, pkm1,pkm2,pkm3,pkm4,pkm5,pkm6)
VALUES
($1, $2, $3, $4, $5, $6, $7)
returning *;

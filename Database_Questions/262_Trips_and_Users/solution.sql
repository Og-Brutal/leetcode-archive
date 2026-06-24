# Write your MySQL query statement below
SELECT 
    t.request_at AS Day, 
    ROUND(
        (SELECT COUNT(*) 
         FROM trips t1
         JOIN users u1 ON t1.client_id = u1.users_id
         JOIN users u2 ON t1.driver_id = u2.users_id
         WHERE u1.banned = 'No' 
           AND u2.banned = 'No' 
           AND t1.status != 'completed'
           AND t1.request_at = t.request_at)
        /
        (SELECT COUNT(*) 
         FROM trips t1
         JOIN users u1 ON t1.client_id = u1.users_id
         JOIN users u2 ON t1.driver_id = u2.users_id
         WHERE u1.banned = 'No' 
           AND u2.banned = 'No' 
           AND t1.request_at = t.request_at)
    , 2) AS `Cancellation Rate`
FROM trips t
JOIN users u1 ON t.client_id = u1.users_id
JOIN users u2 ON t.driver_id = u2.users_id
WHERE u1.banned = 'No' 
  AND u2.banned = 'No' 
  AND t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY t.request_at
ORDER BY request_at;

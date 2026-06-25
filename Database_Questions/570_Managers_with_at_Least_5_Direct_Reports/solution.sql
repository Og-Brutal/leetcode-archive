# Write your MySQL query statement below
SELECT E.name 
FROM Employee AS E
INNER JOIN Employee AS E2 ON E.id = E2.managerId 
GROUP BY E.id 
HAVING COUNT(E.id) >= 5;
 
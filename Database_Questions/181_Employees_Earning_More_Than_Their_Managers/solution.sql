# Write your MySQL query statement below
SELECT e.name AS Employee 
FROM Employee AS e
JOIN Employee AS e2 ON e.managerId = e2.id 
WHERE e.salary > e2.salary;

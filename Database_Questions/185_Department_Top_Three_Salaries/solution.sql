# Write your MySQL query statement below
SELECT
    D.name AS Department, 
    E.name AS Employee,
    E.salary AS Salary
FROM Employee E
JOIN Department D ON E.departmentId = D.id
WHERE 3 >= (
    SELECT COUNT(DISTINCT E2.salary)
    FROM Employee E2
    WHERE E2.salary >= E.salary
      AND E2.departmentId = E.departmentId
)
ORDER BY D.name, E.salary DESC;

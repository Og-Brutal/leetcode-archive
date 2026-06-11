CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
    SELECT DISTINCT salary
    FROM Employee AS E
    WHERE N = (
      SELECT COUNT(DISTINCT E2.salary)
      FROM Employee AS E2
      WHERE E2.salary >= E.salary
    )
    LIMIT 1
  );
END;

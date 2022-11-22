SELECT a.name AS 'brock name', count(b.name) AS 'customer count'
FROM BROKER a JOIN CUSTOMER b ON (a.BrokerID = b.BrokerID) 
GROUP BY a.BrokerID
ORDER BY count(b.name) DESC, a.name ASC
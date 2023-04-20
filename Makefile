db:
	@docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=practice -p 3306:3306 -d mysql

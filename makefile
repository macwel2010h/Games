start:
	@docker run -p 8080:80 --rm --name games-apache-container -v "${PWD}":/usr/local/apache2/htdocs/ httpd:2.4
	@echo "The server started on http://localhost:8080"

destroy:
	@docker rmi httpd:2.4
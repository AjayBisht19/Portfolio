FROM tomcat:8.0.51-jre-alpine
mkdir /usr/local/tomcat/webapps/eoffice
COPY ./build/. /usr/local/tomcat/webapps/eoffice/.
CMD [“catalina.sh”, “run”]
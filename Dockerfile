FROM tomcat:8.0.51-jre-alpine
cd /usr/local/tomcat/webapps
mkdir eoffice
COPY ./build/. /usr/local/tomcat/webapps/eoffice/.
CMD [“catalina.sh”, “run”]
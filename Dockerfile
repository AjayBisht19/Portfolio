FROM tomcat:8.0.51-jre8-alpine
RUN cd /usr/local/tomcat/webapps
RUN mkdir eoffice
COPY ./build /usr/local/tomcat/webapps/eoffice
CMD [“catalina.sh”, “run”]
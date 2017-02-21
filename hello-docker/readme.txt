mvn clean package docker:build
windows下未成功

报：
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 6.170 s
[INFO] Finished at: 2017-02-21T16:19:45+08:00
[INFO] Final Memory: 40M/438M
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal com.spotify:docker-maven-plugin:0.4.13:build (default-cli) on project hello-docker: Exception caught: java.util.concurre
nt.ExecutionException: com.spotify.docker.client.shaded.javax.ws.rs.ProcessingException: org.apache.http.conn.HttpHostConnectException: Connect to loca
lhost:2375 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect -> [Help 1]


centos下成功.
1, 编辑、生成image并push
mvn clean package docker:build

2, 启动容器
docker run -d -p 8080:8080 192.168.1.158:5000/hello-docker

3, 浏览器访问http://ip:8080
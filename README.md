# NodeJSApp
Eine kleine Test- CI/CD Pipeline definiert für Jenkins in einem OpenShift Cluster.

## Vorraussetzung:

1. CodeReadyContainer von RedHat ist installiert: https://crc.dev/crc/
2. Und Jenkins (-Ephemeral) installieren.

## Ausführen der Pipeline:

1. In Openshift einen [Pipeline-Build](/Templates/pipelinebc.yaml) anlegen.
2. GitHub/Docker Secrets in Openshift anlegen.
3. Build in Openshift Starten.

## Pipeline:

Jenkins sollte nun einen Nodejs-Agent anlegen, welcher den JavaScript Code aus dem Repository
installiert, testet und dann in OpenShift einen [Docker-Build](/Templates/dockerbuild.yaml) anstößt.
Dieser läd dann das Image in das darin definierte DockerHub Repository.
Zum Schluß wird ein Helm-Agent erstellt, welcher das [Helm-Chart](/helm/testNode) installiert, in dem
ein [Deployment](/helm/testNode/templates/deployment.yaml) mit zugehörigem [Service](/helm/testNode/templates/service.yaml) und
[Route](/helm/testNode/templates/route.yaml) definiert ist.

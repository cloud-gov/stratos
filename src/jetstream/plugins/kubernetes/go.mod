module github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/kubernetes

go 1.12

require (
	github.com/SermoDigital/jose v0.9.1
	github.com/aws/aws-sdk-go v1.17.5
	github.com/cloudfoundry-incubator/stratos/src/jetstream/repository/interfaces v0.0.0-20191015083202-4c24d26ae1ec
	github.com/docker/docker v1.13.1 // indirect
	github.com/elazarl/goproxy v0.0.0-20191011121108-aa519ddbe484 // indirect
	github.com/gorilla/websocket v1.4.0
	github.com/gregjones/httpcache v0.0.0-20190212212710-3befbb6ad0cc // indirect
	github.com/kubernetes-sigs/aws-iam-authenticator v0.3.0
	github.com/labstack/echo/v4 v4.11.1
	github.com/russross/blackfriday v2.0.0+incompatible // indirect
	github.com/satori/go.uuid v1.2.0
	github.com/sirupsen/logrus v1.4.2
	github.com/smartystreets/goconvey v1.6.4
	gopkg.in/yaml.v2 v2.2.8
	helm.sh/helm/v3 v3.0.0
	k8s.io/api v0.17.16
	k8s.io/apimachinery v0.17.16
	k8s.io/client-go v0.17.16
	sigs.k8s.io/yaml v1.1.0
)

replace (
	github.com/SermoDigital/jose => github.com/SermoDigital/jose v0.9.2-0.20180104203859-803625baeddc
	github.com/cloudfoundry-incubator/stratos/src/jetstream => ../..
	github.com/docker/docker => github.com/moby/moby v0.7.3-0.20190826074503-38ab9da00309
	github.com/kubernetes-sigs/aws-iam-authenticator => github.com/kubernetes-sigs/aws-iam-authenticator v0.3.1-0.20190111160901-390d9087a4bc
	github.com/russross/blackfriday v2.0.0+incompatible => github.com/russross/blackfriday v1.5.2
	github.com/sergi/go-diff => github.com/sergi/go-diff v1.0.0
	github.com/spf13/cobra => github.com/spf13/cobra v0.0.3
)

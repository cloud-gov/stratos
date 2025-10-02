module github.com/cloudfoundry/stratos/src/jetstream

go 1.22.4

require (
	github.com/antonlindstrom/pgstore v0.0.0-20170604072116-a407030ba6d0
	github.com/cf-stratos/mysqlstore v0.0.0-20170822100912-304308519d13
	github.com/cloud-gov/cf-common/v2 v2.0.0
	github.com/cloud-gov/go-cfenv v1.19.1
	github.com/cloudfoundry/sonde-go v0.0.0-20230710164515-a0a43d1dbbf8
	github.com/domodwyer/mailyak v3.1.1+incompatible
	github.com/elazarl/goproxy v0.0.0-20240618083138-03be62527ccb // indirect
	github.com/elazarl/goproxy/ext v0.0.0-20240618083138-03be62527ccb // indirect
	github.com/go-sql-driver/mysql v1.5.0
	github.com/golang/mock v1.6.0
	github.com/gopherjs/gopherjs v0.0.0-20190411002643-bd77b112433e // indirect
	github.com/gorilla/context v1.1.1
	github.com/gorilla/securecookie v1.1.2
	github.com/gorilla/sessions v1.3.0
	github.com/gorilla/websocket v1.5.3
	github.com/jtolds/gls v4.20.0+incompatible // indirect
	github.com/kat-co/vala v0.0.0-20170210184112-42e1d8b61f12
	github.com/labstack/echo/v4 v4.12.0
	github.com/mattn/go-sqlite3 v1.14.5
	github.com/nwmac/sqlitestore v0.0.0-20180824125213-7d2ab221fb3f
	github.com/onsi/ginkgo v1.16.5 // indirect
	github.com/satori/go.uuid v1.2.0
	github.com/sirupsen/logrus v1.9.3
	github.com/smartystreets/assertions v0.0.0-20190401211740-f487f9de1cd3 // indirect
	github.com/smartystreets/goconvey v1.6.4
	github.com/swaggo/echo-swagger v1.0.0
	github.com/swaggo/swag v1.6.7 // indirect
	golang.org/x/crypto v0.26.0
	gopkg.in/DATA-DOG/go-sqlmock.v1 v1.5.0
	gopkg.in/yaml.v2 v2.4.0
)

replace (
	github.com/SermoDigital/jose => github.com/SermoDigital/jose v0.9.2-0.20180104203859-803625baeddc
	github.com/Sirupsen/logrus => github.com/sirupsen/logrus v1.4.1
	gopkg.in/DATA-DOG/go-sqlmock.v1 => github.com/DATA-DOG/go-sqlmock v1.1.3
)

require (
	code.cloudfoundry.org/go-log-cache v1.0.0
	code.cloudfoundry.org/go-loggregator/v8 v8.0.5
	github.com/cloudfoundry/noaa/v2 v2.5.0
	github.com/cloudfoundry/stratos/src/jetstream/api v0.0.0-20250312201517-2a076063346f
	github.com/pressly/goose v2.7.0+incompatible
	github.com/samber/lo v1.51.0
)

require (
	code.cloudfoundry.org/go-loggregator v6.2.0+incompatible // indirect
	github.com/KyleBanks/depth v1.2.1 // indirect
	github.com/PuerkitoBio/purell v1.1.1 // indirect
	github.com/PuerkitoBio/urlesc v0.0.0-20170810143723-de5bf2ad4578 // indirect
	github.com/cloudfoundry-community/go-cfenv v1.17.0 // indirect
	github.com/fsnotify/fsnotify v1.6.0 // indirect
	github.com/go-openapi/jsonpointer v0.19.3 // indirect
	github.com/go-openapi/jsonreference v0.19.3 // indirect
	github.com/go-openapi/spec v0.19.4 // indirect
	github.com/go-openapi/swag v0.19.5 // indirect
	github.com/go-task/slim-sprig v0.0.0-20230315185526-52ccab3ef572 // indirect
	github.com/golang-jwt/jwt v3.2.2+incompatible // indirect
	github.com/golang/protobuf v1.5.0 // indirect
	github.com/govau/cf-common v0.0.7 // indirect
	github.com/grpc-ecosystem/grpc-gateway v1.16.0 // indirect
	github.com/labstack/gommon v0.4.2 // indirect
	github.com/lib/pq v1.10.9 // indirect
	github.com/mailru/easyjson v0.7.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/mitchellh/mapstructure v1.5.0 // indirect
	github.com/nxadm/tail v1.4.8 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/swaggo/files v0.0.0-20190704085106-630677cd5c14 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	github.com/valyala/fasttemplate v1.2.2 // indirect
	golang.org/x/net v0.28.0 // indirect
	golang.org/x/sys v0.24.0 // indirect
	golang.org/x/text v0.22.0 // indirect
	golang.org/x/time v0.5.0 // indirect
	golang.org/x/tools v0.24.0 // indirect
	google.golang.org/genproto v0.0.0-20200513103714-09dca8ec2884 // indirect
	google.golang.org/grpc v1.33.1 // indirect
	google.golang.org/protobuf v1.34.2 // indirect
	gopkg.in/tomb.v1 v1.0.0-20141024135613-dd632973f1e7 // indirect
)

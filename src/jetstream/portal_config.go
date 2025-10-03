package main

import (
	"github.com/cloud-gov/cf-common/v2/env"
	"github.com/cloudfoundry/stratos/src/jetstream/api"
)

func (p *portalProxy) GetConfig() *api.PortalConfig {
	return &p.Config
}

func (p *portalProxy) Env() *env.VarSet {
	return p.env
}

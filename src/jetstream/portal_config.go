package main

import (
	"github.com/cloudfoundry-incubator/stratos/src/jetstream/repository/interfaces"
	"github.com/cloud-gov/cf-common/env"
)

func (p *portalProxy) GetConfig() *interfaces.PortalConfig {
	return &p.Config
}

func (p *portalProxy) Env() *env.VarSet {
	return p.env
}

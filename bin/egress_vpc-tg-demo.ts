#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { EgressVpcTgDemoStack } from '../lib/egress_vpc-tg-demo-stack';

const app = new cdk.App();
new EgressVpcTgDemoStack(app, 'EgressVpcTgDemoStack');

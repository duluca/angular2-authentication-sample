/// <reference path="../typings/tsd.d.ts" />

import {routerInjectables} from 'angular2/router';
import {formInjectables} from './common/formInjectables';
import {shadowDomInjectables} from './common/shadowDomInjectables';
import { bootstrap } from 'angular2/angular2';
import { bind } from 'angular2/di';
import { PipeRegistry } from 'angular2/change_detection';

import { App } from './app/app';
import { pipes } from './utils/pipes/pipes';

bootstrap(
  App,
  [
    shadowDomInjectables,
    formInjectables,
    routerInjectables,
    bind(PipeRegistry).toValue(new PipeRegistry(pipes))
  ]
);
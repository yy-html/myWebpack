import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { asyncComponent } from '@src/components/AsyncComponent'

export default props => (
  <Switch>
    <Route exact path='/uploadPicturePreview' component={asyncComponent('/UploadPicturePreview')} />
    <Route exact path='/parentHasSon' component={asyncComponent('/ParentHasSon')} />
    {/* <Redirect from='/' to='/' /> */}
    {/* <Route component={NotFound} /> */}
    {/* <MyRoute /> */}
  </Switch>
)
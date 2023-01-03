import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
      <Route path="/user/:userId" component={Profile}/>
      </Switch>
      </div>)
}

export default MainRouter
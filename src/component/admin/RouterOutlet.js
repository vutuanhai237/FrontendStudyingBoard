import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom'

class AsyncRouteComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { canActivate: false }
  }

  componentDidMount() {
    if (this.props.route.canActivate) {
      this.props.route.canActivate().then(() => {
        this.setState({ canActivate: true })
      }).catch(() => {
        this.setState({ canActivate: false })
      })
    } else {
      this.setState({ canActivate: true })
    }
  }

  render() {
    return this.state.canActivate ?
      <this.props.route.component {...this.props} data={this.props.route.data} routeConfig={this.props.route.routeConfig} /> :
      <></>
  }
};

const RouterOutletSwitch = ({ routeConfig }) => {
  let { path, url } = useRouteMatch()

  return (
    <Switch>
      {routeConfig.routes && routeConfig.routes.map((route, i) => {
        return (
          <Route
            key={path + i}
            path={(path + route.path).replace(/\/\//g, '/')}
            exact={route.exact}
            render={props => <AsyncRouteComponent {...props} route={route} />}
          />
        )
      })}
    </Switch>
  )
}

export const RouterOutlet = ({ routeConfig }) => (
  <>
    {routeConfig.fallback && (
      <Suspense fallback={routeConfig.fallback}>
        <RouterOutletSwitch routeConfig={routeConfig} />
        {console.log("suspense")}
      </Suspense>
    )}

    {!routeConfig.fallback && (
      <div>
        <RouterOutletSwitch routeConfig={routeConfig} />
        {console.log("no suspense")}
      </div>
    )}
  </>
)

export default RouterOutlet;
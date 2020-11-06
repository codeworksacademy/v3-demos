export function registerGlobalComponents(app) {
  // https://webpack.js.org/guides/dependency-management/#require-context
  // @ts-ignore
  const requireComponent = require.context('./components', true, /[a-z0-9]+\.(jsx?|vue)$/i)

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const component = componentConfig.default || componentConfig
    // Prefer letting the componentName be that same as the file
    const componentName = component.name || fileName
      .substr(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')

    // Globally register the component
    app.component(componentName, component)
  })
}

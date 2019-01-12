// Update desktopTabBar on route change
exports.onRouteUpdate = ({ location }) => {
  const tabs = document.getElementById('desktopTabBar')
  tabs.childNodes.forEach(child => {
    child.classList.remove('is-active')
  })

  const baseRoute = `/${location.pathname.split('/')[1]}`
  const tab = document.getElementById(baseRoute)
  if (tab) {
    tab.classList.toggle('is-active')
  }
}

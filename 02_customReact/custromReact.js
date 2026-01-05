
function customRender(reactElement, container) {

  // let customElement = document.createElement(reactElement.type)
  // customElement.setAttribute('href', reactElement.props.href)
  // customElement.setAttribute('target', reactElement.props.target)
  // customElement.innerHTML = reactElement.children

  // container.appendChild(customElement)

  let customElement = document.createElement(reactElement.type)
  customElement.innerHTML = reactElement.children

  for (const prop in reactElement.props) {
    customElement.setAttribute( prop, reactElement.props[prop])
  }

  container.appendChild(customElement)

}





const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_black'
  },
  children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)




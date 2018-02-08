var html = require('choo/html')

var TITLE = 'Dr. Richard Cordero, Philosopher, Web Developer'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <h1>Howdy!</h1>
      </main>
    </body>
  `
}

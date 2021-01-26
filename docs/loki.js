window.dbLoki = {
  loaded: false
}

window.dbLoki.db = new window.loki('db.json',{
  autoload: true,
  autoloadCallback: () => window.dbLoki.loaded = true,
  autosave: false,
  autosaveInterval: 4000
})

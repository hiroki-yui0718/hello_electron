import path from 'path'
import { remote } from 'electron'
import Datastore from 'nedb'

export const db = new Datastore({
    filename:path.join(remote.app.getPath('userData'), './todo.nedb'),
    autoload: true
  })
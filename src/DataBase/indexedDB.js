import Datastore from 'nedb'

export const db = new Datastore({
    filename: 'data',
    autoload: true
  })
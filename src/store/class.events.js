// import knex from './db/knex'
import send from './class.send'

export default class EventsAsterisk {
  handleEvent (eventObject) {
    const eventsList = {
      Join (event) {
        if (event.data.Queue === '910' || event.data.Queue === '999') {
          const data = {
            event: 'Join',
            CallerIDNum: event.data.CallerIDNum,
            Queue: 910,
            Uniqueid: event.data.Uniqueid
          }
          send.SendData(data)
        }
      },
      Bridge (event) {
        const data = {
          event: 'Bridge',
          CallerID2: event.data.CallerID2,
          Uniqueid1: event.data.Uniqueid1
        }
        send.SendData(data)
      },
      Hangup (event) {
        const data = {
          event: 'Hangup',
          Uniqueid: event.data.Uniqueid
        }
        send.SendData(data)
      }
    }
    const f = eventsList[eventObject.data.Event]
    if (f) {
      f(eventObject)
    }
  }
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const ipc = global.require('electron').ipcRenderer
const messages = require('./constants/messages')

// Send message to main process containing the
// current location
module.exports.visit = (location) => {
  ipc.send(messages.LEDGER_VISIT, location)
}

// Retrieve the history from the main process
module.exports.history = () => {
  return ipc.sendSync(messages.LEDGER_STATS)
}

#!/usr/bin/env node --no-warnings --loader ts-node/esm

import { test } from 'tstest'

import { PuppetWhatsapp } from './puppet-whatsapp.js'

class PuppetWhatsAppTest extends PuppetWhatsapp {
}

test('PuppetWhatsapp perfect restart testing', async t => {
  const puppet = new PuppetWhatsAppTest()
  try {

    for (let i = 0; i < 3; i++) {
      await puppet.start()
      t.ok(puppet.state.active(), 'should be turned active after start()')

      await puppet.stop()
      t.ok(puppet.state.inactive(), 'should be turned inactive after stop()')

      t.pass('start/stop-ed at #' + i)
    }

    t.pass('PuppetWhatsapp() perfect restart pass.')

  } catch (e) {
    console.error(e)
    t.fail(e as any)
  }
})

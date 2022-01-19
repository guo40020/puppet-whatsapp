import {
  log, PRE,
} from '../config.js'
import * as PUPPET from 'wechaty-puppet'
import type PuppetWhatsapp from '../puppet-whatsapp'

export async function  contactSelfQRCode (this: PuppetWhatsapp): Promise<string> {
  log.verbose(PRE, 'contactSelfQRCode()')
  return PUPPET.throwUnsupportedError()
}

export async function contactSelfName (this: PuppetWhatsapp, name: string): Promise<void> {
  log.verbose(PRE, 'contactSelfName(%s)', name)
  await this.manager.setNickname(name)
}

export async function contactSelfSignature (this: PuppetWhatsapp, signature: string): Promise<void> {
  log.verbose(PRE, 'contactSelfSignature(%s)', signature)
  await this.manager.setStatusMessage(signature)
}

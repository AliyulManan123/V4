import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283146993017', 'Ikhsan', true],
  ['6283146993017'], 
  ['6283146993017'] 
] //Numeros de owner 

global.mods = ['6283146993017'] 
global.prems = ['6283146993017', '6285257889292', '6283869076821']

global.lann = 'VTSgyFSE' // https://api.betabotz.org
global.btc = 'ie87DuZ7' // https://api.botcahx.live
global.wtf = 'shanbot'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org',
  wtf: 'https://xzn.wtf'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'VTSgyFSE',
  'https://xzn.wtf': 'shanbot'
}

// Sticker WM
global.packname = 'Sticker by' 
global.author = '©shanbot' 
global.fgig = '• Jangan lupa polow\nhttps://www.instagram.com/malasnulisnamapengguna\n' 
global.dygp = 'https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg'
global.fgsc = '*Malas Menanggapi!*' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ Proses...!*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
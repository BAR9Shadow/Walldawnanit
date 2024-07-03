//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*تــم وضــع رســالــة الــتـرحـيب !*')
  } else throw `*🥳نورتنا
 \n يا @${usedPrefix + command} 
\nفي الجروب  @${groupMetadata.subject}
\n⚜️لا تنسى تقرأ القوانين و بعض الامور *`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['الترحيب'] 
handler.admin = true
handler.owner = false

export default handler

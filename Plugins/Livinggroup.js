//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('*تـــم تـحديــث رســالــة الـوداع !*')
  } else throw `*أدخــل الــرسالــهالي اللقاء 😘 
\n ماعرفش ليش بس احسن هيك 
\n يبقى ناس طيبة في الجروب*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['المغادره'] 
handler.admin = true
handler.owner = false

export default handler

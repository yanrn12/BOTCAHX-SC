let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedTrofi = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].trofi - a[1].trofi)
  let sortedLiga = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].rtrofi - a[1].rtrofi)
  let usersTrofi = sortedTrofi.map(v => v[0])
  let usersLiga = sortedLiga.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedTrofi.length)
    let text = `
• *Level Leaderboard  Rank ${len}* •
Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.level + ' Lvl*').join`\n`}
• *Money Leaderboard Top ${len}* •
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.money + ' Money*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...userslevel.slice(0, len), ...usersmoney.slice(0, len)]
    }
  })
}
handler.help = ['rankliga [jumlah user]', 'rl [jumlah user]']
handler.tags = ['rpg','kingdom']
handler.command = /^(ranked|rank)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
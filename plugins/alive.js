const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: *🚀 Hi SADIYA-MD Is Online Now*\n\n*🚯 Owner* - Sadiya Ofc\n\n*🚯 Owner Number* -94742195461\n\n*🚯 Whatsapp Channel* - https://whatsapp.com/channel/0029VagR9a11iUxd0hUsD501\n\n_විධාන මෙනුව ලබා ගැනීමට *.menu* ලෙස ටයිප් කරන්න._},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



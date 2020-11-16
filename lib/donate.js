exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI WAWAN BOT ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: -
⚜ *#PULSA*: 085718038695
⚜ *#GOPAY*: -

📺 *Iklan* :

✅ Follow akun instagram admin mridwanalb_
${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di WAWAN BOT*${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Jangan Spam‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official WAWAN BOT  [1] : ${grupch1}

✳️ Official WAWAN BOT [2] : ${grupch2}

  
📢 -----[ *POWERED BY WAWAN BOT${BotName}* ]----- 🔔`
}

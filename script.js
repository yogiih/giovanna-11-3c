const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (Grafico, {
type: "pie",
data: {
    labels: [
        "Instagram",
        "WhatsApp",
        "Facebook",
        "WeChat",
        "TikTok",
        "DouYin",
        "Twitter",
        "Telegram",
        "FB",
        "Messenger",
        "LINE"
    ],
}
}
)

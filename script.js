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
    datasets:[{
        data:[
            16.5,
            16.1,
            12.8,
            12.8,
            7.4,
            6.6,
            3.2,
            2.4,
            2.3,
            1.7,
        ],
        backgroundColor:[
            "rgb(#FFD700)",
            "rgb(#C0C0C0)",
            "rgb(#A97142)",
            "rgb(#006400)",
            "rgb(#008000)",
            "rgb(#228B22)",
            "rgb(#32CD32)",
            "rgb(#00FF00)",
            "rgb(#7CFC00)",
            "rgb(#7FFF00)",
        ],
    }]
}
}
)

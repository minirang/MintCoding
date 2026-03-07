function response(room, msg, sender, isGroupChat, replier) {
  if (msg === "!ip") {
    try {
      const data = org.jsoup.Jsoup
        .connect("https://httpbin.org/ip")
        .ignoreContentType(true)
        .get()
        .body()
        .text();
      const json = JSON.parse(data);
      replier.reply(json.origin);
    } catch (e) {
      replier.reply("IP 조회 실패");
    }
  }
}
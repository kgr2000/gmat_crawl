let puppeteer = require("puppeteer");

async function main() {
  let broswer = await puppeteer.launch({ headless: false });
  let page = await broswer.newPage();
  await page.goto(
    "https://gmatclub.com/forum/search.php?selected_search_tags%5B%5D=164&t=0&search_tags=exact&submit=Search"
  );
  await page.waitFor("td.topicsName.rc");

  let ehList = await page.$$("td.topicsName.rc");
  for (let eh of ehList) {
    let title = await eh.$eval("span.topicTitle", function(el) {
      return el.innerText;
    });
    console.log(title);
  }
  //   broswer.close();
}

main();

let puppeteer = require("puppeteer");

async function main() {
  let broswer = await puppeteer.launch({ headless: true });
  let page = await broswer.newPage();
  await page.goto(
    "https://gmatclub.com/forum/search.php?st=0&sk=t&sd=d&sr=topics&search_id=search_tag&search_id=search_tag&selected_search_tags%5B%5D=164&search_tags=exact&terms=both&sj=one&start=50"
  );
  await page.waitFor(".topicsName.rc");

  let links = await page.$$eval(".topicsName.rc", options => {
    return options.map(option => option.innerHTML);
  });
  console.log(links);
  // let ehList = await page.$$("td.topicsName.rc");
  // for (let eh of ehList) {
  //   let title = await eh.$eval("span.topicTitle", function(el) {
  //     return el.innerText;
  //   });
  //   console.log(title);
  // }
  broswer.close();
}

main();

let puppeteer = require("puppeteer");

async function main() {
  let broswer = await puppeteer.launch({ headless: true });
  const data = []
  for (pi = 0; pi < 50 * 22; pi = pi + 50) {
    let page = await broswer.newPage();
    await page.goto(
      `https://gmatclub.com/forum/search.php?st=0&sk=t&sd=d&sr=topics&search_id=search_tag&search_id=search_tag&selected_search_tags%5B%5D=162&selected_search_tags%5B%5D=228&selected_search_tags%5B%5D=229&selected_search_tags%5B%5D=125&selected_search_tags%5B%5D=126&selected_search_tags%5B%5D=128&selected_search_tags%5B%5D=167&selected_search_tags%5B%5D=129&selected_search_tags%5B%5D=130&selected_search_tags%5B%5D=248&selected_search_tags%5B%5D=163&selected_search_tags%5B%5D=521&selected_search_tags%5B%5D=364&selected_search_tags%5B%5D=532&selected_search_tags%5B%5D=1120&selected_search_tags%5B%5D=1229&selected_search_tags%5B%5D=1358&selected_search_tags%5B%5D=205&selected_search_tags%5B%5D=276&selected_search_tags%5B%5D=534&selected_search_tags%5B%5D=318&selected_search_tags%5B%5D=165&selected_search_tags%5B%5D=1359&selected_search_tags%5B%5D=1360&selected_search_tags%5B%5D=255&selected_search_tags%5B%5D=531&selected_search_tags%5B%5D=273&selected_search_tags%5B%5D=1321&selected_search_tags%5B%5D=316&selected_search_tags%5B%5D=256&selected_search_tags%5B%5D=164&selected_search_tags%5B%5D=1331&selected_search_tags%5B%5D=520&selected_search_tags%5B%5D=278&selected_search_tags%5B%5D=275&selected_search_tags%5B%5D=274&selected_search_tags%5B%5D=522&selected_search_tags%5B%5D=94&selected_search_tags%5B%5D=166&selected_search_tags%5B%5D=285&selected_search_tags%5B%5D=1348&selected_search_tags%5B%5D=1281&selected_search_tags%5B%5D=1282&selected_search_tags%5B%5D=1283&selected_search_tags%5B%5D=1284&selected_search_tags%5B%5D=1285&selected_search_tags%5B%5D=1286&selected_search_tags%5B%5D=1287&selected_search_tags%5B%5D=1288&selected_search_tags%5B%5D=1330&selected_search_tags%5B%5D=1335&selected_search_tags%5B%5D=1336&selected_search_tags%5B%5D=1349&selected_search_tags%5B%5D=1289&selected_search_tags%5B%5D=1290&selected_search_tags%5B%5D=1291&selected_search_tags%5B%5D=1292&selected_search_tags%5B%5D=1293&selected_search_tags%5B%5D=1394&selected_search_tags%5B%5D=1294&selected_search_tags%5B%5D=1404&search_tags=exact&terms=both&sj=one&start=${pi}`);

    await page.waitFor(".topicsName.rc");

    let links = await page.$$eval(".topicsName.rc", options => {
      return options.map(option => option.getElementsByTagName("a")[1].href);
    });
    let title = await page.$$eval(".topicsName.rc", options => {
      return options.map(option => option.children[1].innerText);
    });
    let tags = await page.$$eval(".topicsName.rc", options => {
      return options.map(option => option.children[2].innerText);
    });

    for (i = 0; i < links.length + 1; i++) {
      let newPage = await broswer.newPage();
      await newPage.goto(`${links[i]}`)
      let passage = await newPage.$eval(".bbcodeBoxIn", el => {
        return el.innerHTML
      }).catch(e => console.log(e))
      let questions = await newPage.$$eval(".bbcodeBoxIn", el => {
        return el[1].innerText
      }).catch(e => console.log(e))

      await data.push({
        title,
        tags,
        passage,
        questions
      })

      console.log(data.length)
      newPage.close();
    }
    page.close();
  }

  broswer.close();
}
main();

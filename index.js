const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Banker to the Poor”
Professor Muhammad Yunus established the Grameen Bank in Bangladesh in 1983, fueled by the belief that credit is a fundamental human right. His objective was to help poor people escape from poverty by providing loans on terms suitable to them and by teaching them a few sound financial principles so they could help themselves.

From Dr. Yunus’ personal loan of small amounts of money to destitute basketweavers in Bangladesh in the mid-70s, the Grameen Bank has advanced to the forefront of a burgeoning world movement toward eradicating poverty through microlending. Replicas of the Grameen Bank model operate in more than 100 countries worldwide.

Born in 1940 in the seaport city of Chittagong, Professor Yunus studied at Dhaka University in Bangladesh, then received a Fulbright scholarship to study economics at Vanderbilt University. He received his Ph.D. in economics from Vanderbilt in 1969 and the following year became an assistant professor of economics at Middle Tennessee State University. Returning to Bangladesh, Yunus headed the economics department at Chittagong University.

From 1993 to 1995, Professor Yunus was a member of the International Advisory Group for the Fourth World Conference on Women, a post to which he was appointed by the UN secretary general. He has served on the Global Commission of Women’s Health, the Advisory Council for Sustainable Economic Development and the UN Expert Group on Women and Finance.

Professor Yunus is the recipient of numerous international awards for his ideas and endeavors, including the Mohamed Shabdeen Award for Science (1993), Sri Lanka; Humanitarian Award (1993), CARE, USA; World Food Prize (1994), World Food Prize Foundation, USA; lndependence Day Award (1987), Bangladesh’s highest award; King Hussein Humanitarian Leadership Award (2000), King Hussien Foundation, Jordan; Volvo Environment Prize (2003), Volvo Environment Prize Foundation, Sweden; Nikkei Asia Prize for Regional Growth (2004), Nihon Keizai Shimbun, Japan; Franklin D. Roosevelt Freedom Award (2006), Roosevelt Institute of The Netherlands; and the Seoul Peace Prize (2006), Seoul Peace Prize Cultural Foundation, Seoul, Korea. He is a member of the board of the United Nations Foundation.

From Les Prix Nobel. The Nobel Prizes 2006, Editor Karl Grandin, [Nobel Foundation], Stockholm, 2007
This autobiography/biography was written at the time of the award and later published in the book series Les Prix Nobel/ Nobel Lectures/The Nobel Prizes. The information is sometimes updated with an addendum\n');
});

const port = 200;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

import Crypto from "@/public/images/crypto.png";
import PizzaBtc from "@/public/images/pizzabtc.png";
import FakeJsonServer from "@/public/images/fakejsonserver.png";
const posts = [
  {
    title: "Twitter Pizza Btc tracker Bot",
    id: "twitterbot",
    description:
      "A twitter bot that trackes the would be price of the Two pizzas bought for 10,000 bitcoins in 2010.",
    picture: PizzaBtc,
    texts: [
      "This is a twitter bot that trackes the would be price of the Two pizzas bought for 10,000 bitcoins in 2010.",
      "It was built using the twitter api and the CoinMarketCap api.",
      "It tweets the price of bitcoin and pizza every 30 minutes.",
      "Though it is currently inactive, due to me hosting this on Render.com and the free tier takes quite a while to spin up",
    ],
    link: "https://twitter.com/PizzaBtc10000",
    github: "https://github.com/DoneWithWork/twitterbot-BTC-Pizza",
  },
  {
    title: "Fake Json Server",
    description:
      "A fake json server that can be used to mock api calls for testing purposes.",
    picture: FakeJsonServer,
    id: "fakejsonserver",
    texts: [
      "A fake json server that can be used to mock api calls for testing purposes.",
      "It was built using json-server and express js",
      "It can be used to mock api calls for testing purposes.",
      "Also hosted on render.com thus it takes a while to spin up.",
    ],
    link: "https://fakejsonserver.onrender.com",
    github: "https://github.com/DoneWithWork/fakejsonserver",
  },
  {
    title: "Sepolia Eth Crypto Faucet",
    description: "A crypto faucet that gives out free Sepolia Eth to users",
    picture: Crypto,
    id: "sepoliaeth",
    texts: [
      "A crypto faucet that gives out free Sepolia Eth to users",
      "It was built using next js 14 and Alchemy api",
      "One can get a small amount of sepolia eth to be used for testnet practices",
      "Hosted on Vercel thus it spins up quickly",
    ],
    link: "https://nextjs-sepolia-faucet.vercel.app/",
    github: "https://github.com/DoneWithWork/nextjs-sepolia-faucet",
  },
];
export default posts;

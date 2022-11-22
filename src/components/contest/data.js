import moneyFirst from "@/assets/images/contest/money-first.png";
import moneySecond from "@/assets/images/contest/money-second.png";
import moneyThird from "@/assets/images/contest/money-third.png";

const contestData = [
    {
        title: '初選佳作',
        price: '數位獎狀',
        unit: '(共六十位 )',
        img: moneyThird,
        imgName: '數位獎狀'
    },
    {
        title: '個人企業獎',
        price: 'NTD 3,000/位',
        unit: '(共六位 )',
        img: moneySecond,
        imgName: '個人企業獎',
        data: { prizeValue: 3000 }
    },
    {
        title: '團體企業獎',
        price: 'NTD 10,000/組',
        unit: '(共三組 )',
        img: moneyFirst,
        imgName: '團體企業獎',
        data: { prizeValue: 10000 }
    }
]

export default contestData;
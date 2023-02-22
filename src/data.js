import { GiPayMoney, GiPiggyBank } from 'react-icons/gi';
import { BsCash } from 'react-icons/bs';
import Library from './assets/library.jpg';
import Offer from './assets/offer.webp';

export const features = [
  {
    title: "Financial Services",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <BsCash />
  }, {
    title: "Life Service and Healthcare",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <GiPiggyBank />
  }, {
    title: "Consumer and Insustrial Market",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <GiPayMoney />
  }, {
    title: "Insurance",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <GiPayMoney />
  }, {
    title: "Technology and Media",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <GiPayMoney />
  }, {
    title: "Government and Public Services",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.<br />
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
    cum soluta nobis est eligendi optio cumque.
    `,
    icon: <GiPayMoney />
  }
]

export const services = [
  {
    title: "Audit Assurance",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
    `,
    img: Library
  }, {
    title: "Tax Services",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
    `,
    img: Offer
  }, {
    title: "Risk Advisory",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
    `,
    img: Offer
  }, {
    title: "Consulting",
    detail: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
    praesentium voluptatum deleniti atque corrupti  excepturi non provident.
    `,
    img: Library
  }
]
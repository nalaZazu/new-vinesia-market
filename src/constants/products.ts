import { ProductCard } from "@/types/dto/productCard.dto";
import { ItemCardDto } from "@/types/productCard.dto";
import {
  BottleSize,
  PackageType,
  ProductOwner,
} from "@/types/productOverview.dto";

export const ProductList: ItemCardDto[] = [
  {
    id: 1,
    description: "lorem ipsum",
    name: 'Brunello di Montalcino "Piaggione"',
    vintage: 2019,
    packageType: PackageType.Case,
    bottleSize: BottleSize.Standard,
    packageSize: 6,
    artwork: false,
    total: 50,
    available: 50,
    media:
      "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
    owners: [ProductOwner.Vinesia],
    isEdition: false,

    // buyNowPrice: 3600,
    // estPrice: 20,
    // number: 10,
  },
  // {
  //   id: 2,
  //   description: "lorem ipsum",
  //   name: 'Brunello di Montalcino "Piaggione"',
  //   vintage: 2019,
  //   packageType: "Bottle",
  //   packageSize: 1,
  //   artwork: false,
  //   total: 50,
  //   available: 14,
  //   media:
  //     "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
  //   owners: ["Vinesia", "Private"],
  //   buyNowPrice: 3600,
  //   estPrice: 20,
  //   number: 10,
  // },
  // {
  //   id: 3,
  //   description: "lorem ipsum",
  //   name: 'Brunello di Montalcino "Piaggione"',
  //   vintage: 2019,
  //   packageType: "Case",
  //   packageSize: 6,
  //   artwork: true,
  //   total: 50,
  //   available: 50,
  //   media:
  //     "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
  //   owners: ["Vinesia"],
  //   buyNowPrice: 3600,
  //   estPrice: 20,
  //   number: 10,
  // },
  // {
  //   id: 4,
  //   description: "lorem ipsum",
  //   name: 'Brunello di Montalcino "Piaggione"',
  //   vintage: 2019,
  //   packageType: "Case",
  //   packageSize: 6,
  //   artwork: false,
  //   total: 50,
  //   available: 50,
  //   media:
  //     "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
  //   owners: ["Vinesia"],
  //   buyNowPrice: 3600,
  //   estPrice: 20,
  //   number: 10,
  // },
  // {
  //   id: 5,
  //   description: "lorem ipsum",
  //   name: 'Brunello di Montalcino "Piaggione"',
  //   vintage: 2019,
  //   packageType: "Case",
  //   packageSize: 6,
  //   artwork: false,
  //   total: 50,
  //   available: 1,
  //   media:
  //     "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
  //   owners: ["Vinesia", "Private"],
  //   buyNowPrice: 3600,
  //   estPrice: 20,
  //   number: 10,
  // },
  // {
  //   id: 6,
  //   description: "lorem ipsum",
  //   name: 'Brunello di Montalcino "Piaggione"',
  //   vintage: 2019,
  //   packageType: "Case",
  //   packageSize: 6,
  //   artwork: false,
  //   total: 50,
  //   available: 0,
  //   media:
  //     "https://vinesiadev.s3.eu-north-1.amazonaws.com/zrzut-ekranu-2023-09-28-o-12-24-1-22.png",
  //   owners: ["Private"],
  //   buyNowPrice: 3600,
  //   estPrice: 20,
  //   number: 10,
  // },
];

export const releaseDetailsList = [
  { id: 1, title: "TOTAL PERFORMANCE", vlaue: "122%" },
  { id: 2, title: "TOTAL VOLATILITY", vlaue: "0.2%" },
  { id: 3, title: "SHARPE RATIO", vlaue: "110" },
];

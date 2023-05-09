import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// started & home screen
import StartedScreen from "./startedscreen/StartedScreen";
import Welcome from "./home/welcome/Welcome";

// Qrcode Scanner & login & send email
import ScanQrCode from "./authentification/qrcodescan/ScanQrCode";
import LoginCard from "./authentification/login/LoginCard";
import SendEmail from "./authentification/sendemail/SendEmail";


// ERP & CRM components
import ProductsList from "./home/products/ProductsList";


// job details screen
import HeaderProduct from "./productdetails/headerproduct/HeaderProduct";
import { default as Tabs } from "./productdetails/tabs/Tabs";
import { default as AboutProduct } from "./productdetails/about/About";
import { default as JobFooter } from "./productdetails/footer/Footer";
import StockStatus from "./productdetails/stock/StockStatus";

// common
import ProductCard from "./common/cards/product/ProductCard";


import VrAugmented    from "./home/vraugmented/VrAugmented";



export {
  ScreenHeaderBtn,
  StartedScreen,
  Welcome,
  ProductsList,
  
  ProductCard,
 
  ScanQrCode,
  LoginCard,
  SendEmail,
  StockStatus,
  HeaderProduct,
  Tabs,
  AboutProduct,
  JobFooter,
  VrAugmented,
};

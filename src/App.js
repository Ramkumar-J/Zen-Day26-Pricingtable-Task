import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './card';

let PriceData = [
  {
     plan:"FREE",
     price:"0",
     Planinfo:[
       {
         feature:"Single User",
         ismute:false,
         ischeck:true,
         isbold:false,
       },
       {
        feature:"5GB Storage",
        ismute:false,
        ischeck:true,
        isbold:false,
        
       },
       {
        feature:"Unlimited Public Projects",
        ismute:false,
        ischeck:true,
        isbold:false,
       },
       {
        feature:"Community Access",
        ismute:false,
        ischeck:true,
        isbold:false,
       },
       {
        feature:"Unlimited Private Projects",
        ismute:true,
        ischeck:false,
        isbold:false,
       },
       {
        feature:"Dedicated Phone Support",
        ismute:true,
        ischeck:false,
        isbold:false,
       },
       {
        feature:"Free Subdomain",
        ismute:true,
        ischeck:false,
        isbold:false,
       },
       {
        feature:"Monthly Status Reports",
        ismute:true,
        ischeck:false,
        isbold:false,
       },
  ]
  },
  
  {
    plan:"PLUS",
    price:"9",
    Planinfo:[
      {
        feature:"5 Users",
        ismute:false,
        ischeck:true,
        isbold:true,
      },
      {
       feature:"50GB Storage",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Unlimited Public Projects",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Community Access",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Unlimited Private Projects",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Dedicated Phone Support",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Free Subdomain",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Monthly Status Reports",
       ismute:true,
       ischeck:false,
       isbold:false,
      },
 ]
  },
  {
    plan:"PRO",
    price:"49",
    Planinfo:[
      {
        feature:"Unlimited Users ",
        ismute:false,
        ischeck:true,
        isbold:true,  
      },
      {
       feature:"150GB Storage",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Unlimited Public Projects",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Community Access",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Unlimited Private Projects",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Dedicated Phone Support",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
      {
       feature:"Unlimited Free Subdomains",
       ismute:false,
       ischeck:true,
       isbold:true,
      },
      {
       feature:"Monthly Status Reports",
       ismute:false,
       ischeck:true,
       isbold:false,
      },
 ]
  },
];

function App() {
  return (
    <div className="App">
     <section class="pricing py-5">
     <div class="container">
     <div class="row">
       {
       PriceData.map((data) => {
         return <Card PriceCard={data} ></Card>
       })
      }
     </div>
     </div>
     </section>
    </div>
  );
}

export default App;

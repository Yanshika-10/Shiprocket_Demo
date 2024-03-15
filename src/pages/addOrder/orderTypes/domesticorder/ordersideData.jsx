
import BuyerDetails from './BuyerDetail';
import PickupDetails from './PickupDetails';
import OrderDetails from './OrderDetails';
import PackageDetails from './PackageDetails';

const ordersideData = [
    
  { label: 'Buyers Details', component: <BuyerDetails /> , title:'Add Buyers Details'},
  { label: 'Pickup Details', component: <PickupDetails />, title:'Pickup Details' },
  { label: 'Order Details', component: <OrderDetails /> , title:'Order Details'},
  { label: 'Package Details', component: <PackageDetails />, title:'Package Details' },
];

export default ordersideData;
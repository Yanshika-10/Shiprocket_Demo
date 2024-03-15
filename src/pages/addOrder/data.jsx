

import DomesticOrder from './orderTypes/domesticorder/DomesticOrder';
import InternationalOrder from './orderTypes/internationalorder/InternationalOrder';
import BulkOrder from './orderTypes/bulkorder/BulkOrder';
import QuickShipment from './orderTypes/quickorder/QuickShipment';

const buttonsData = [
    
  { label: 'Domestic Order', component: <DomesticOrder />},
  { label: 'International Order', component: <InternationalOrder /> },
  { label: 'Bulk Order', component: <BulkOrder /> },
  { label: 'Quick Shipment', component: <QuickShipment /> },
];

export default buttonsData;

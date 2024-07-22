import { Request, Service } from '@sap/cds';

import '../configuration/module-alias';

import { db } from '@/common/entities/db/models';

export default (service: Service) => {
    service.after('READ', 'PurchaseOrderHeaders', (results: db.models.PurchaseOrderHeaders[], request: Request) => {
        results.forEach(poHeader => poHeader.company = 'ABC');
    });
    service.before('CREATE', 'PurchaseOrderHeaders', (request: Request) => {
        const items = [
            {
                material: 'Material_insomnia',
                quantity: 10,
                uom: 'PC',
                netPrice: 30,
                center: 'ABCD'
            },
            {
                material: 'Material_insomnia2',
                quantity: 5,
                uom: 'KG',
                netPrice: 500,
                center: 'ABCD'
            }
        ];
        request.data.items = items;
    });
};

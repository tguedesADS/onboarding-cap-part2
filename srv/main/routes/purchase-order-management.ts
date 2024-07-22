import { Request, Service } from '@sap/cds';

import { db } from '../../common/entities/db/models';

export default (service: Service) => {
    service.after('READ', 'PurchaseOrderHeaders', (results: db.models.PurchaseOrderHeaders[], request: Request) => {
        results.forEach(poHeader => poHeader.company = 'ABC');
    });
};

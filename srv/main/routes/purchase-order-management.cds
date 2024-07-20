using { db.models } from '../../../db/models';

service PurchaseOrderManagementService {
    entity PurchaseOrderHeaders as projection on models.PurchaseOrderHeaders;
    entity PurchaseOrderItems   as projection on models.PurchaseOrderItems;
}

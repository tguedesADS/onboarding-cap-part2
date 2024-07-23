using { db.models } from '../../../db/models';

@requires: 'authenticated-user'
service PurchaseOrderManagementService {
    @readonly entity PurchaseOrderHeaders as projection on models.PurchaseOrderHeaders;
    @readonly entity PurchaseOrderItems   as projection on models.PurchaseOrderItems;
}


@requires: 'ROLE_DUMMY_ADMIN'
service PurchaseOrderManagementAdminService {
    // @(restrict: [{ grant: ['CREATE', 'UPDATE', 'DELETE'], to: 'ROLE_DUMMY_ADMIN' }])
    entity PurchaseOrderHeaders as projection on models.PurchaseOrderHeaders;
    entity PurchaseOrderItems   as projection on models.PurchaseOrderItems;
}

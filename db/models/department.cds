using {managed} from '@sap/cds/common';

namespace db.models;

entity Departments : managed {
    key id: UUID;
    departmentName: String(30);
}
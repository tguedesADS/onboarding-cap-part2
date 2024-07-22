import '../configuration/module-alias';

import cds, { Request, Service } from '@sap/cds'

import { db } from '@/common/entities/db/models'

export default (service: Service) => {
    service.before('CREATE', 'Employees', async (request: Request) => {
        const swapi = await cds.connect.to('swapi');
        const person = await swapi.send({
            method: 'GET',
            path: 'people/2',
            headers: { 'Content-Type': 'application/json' },
        });

        request.data.createdBy = person.name;
        request.data.modifiedBy = person.name;

        if (!request.data.email) {
            throw {
                error: 'EmailRequired',
                message: 'Email is required'
            };
        }
    })

    service.after('READ', 'Employees', (results: db.models.Employees[], request: Request) => {
        results.forEach(employee => {
            const emailParts = employee.email.split('@')
            employee.email = emailParts[1]
        })
    })
}
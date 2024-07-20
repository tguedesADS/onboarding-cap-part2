import { Request, Service } from "@sap/cds";

export default (service: Service) => {
  service.after(
    "READ",
    "PurchaseOrderHeaders",
    (results: any[], request: Request) => {
      results.forEach((poHeader) => (poHeader.company = "ABC"));
    }
  );
};

import { MetaEntity } from 'angular-odata';

import { Product } from './product.entity';

export const ProductMetaEntity = {
    type: 'NorthwindModel.Product',
    set: {
        name: 'Products',
        annotations: [{"type":"Org.OData.Core.V1.ResourcePath"},{"type":"Org.OData.Capabilities.V1.SearchRestrictions"},{"type":"Org.OData.Capabilities.V1.InsertRestrictions"}],
      },
    annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}],
    fields: {
      ProductID: {type: 'number', key: false, ref: 'ProductID', nullable: false, 
      annotations: [{type: 'Org.OData.Core.V1.Permissions', permissions: ['Org.OData.Core.V1.Permission/Read']}]},
      ProductName: {type: 'string', nullable: true},
      UnitsInStock: {type: 'number', nullable: true}
    }
  } as MetaEntity<Product>;
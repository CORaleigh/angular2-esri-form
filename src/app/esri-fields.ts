export class EsriFields {
  name: string;
  type: string;
  alia: string;
  sqlTyp: string;
  length: number;
  nullable: boolean;
  editable: boolean;
  domain: [
    type, string,
    name, string,
    codedValues, [
      name: string,
      code: number
    ]
  ];
  defaultValue: string
}

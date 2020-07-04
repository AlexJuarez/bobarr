import {
  camelCase,
} from 'lodash';

export function recursiveCamelCase<TOutput>(
  object: Record<string, any> | Array<Record<string, any>>
) {
  return transform(object) as TOutput;
}

function transform(object: any): any {
  if (Array.isArray(object)) {
    return object.map(transform);
  }

  if (typeof object === 'string') {
    return object;
  }

  if (typeof object === 'number') {
    return object;
  }

  let result: {[key: string]: any} = {};
  Object.entries(object).forEach((k, v) => {
    result[camelCase(`${k}`)] = transform(v);
  });

  return result;
}

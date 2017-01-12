import merge from 'deepmerge';

import transen from './translate/locale-en';
import transru from './translate/locale-ru';

const trans = {
  en: transen,
  ru: transru
};

export const translate = trans;
export default trans;
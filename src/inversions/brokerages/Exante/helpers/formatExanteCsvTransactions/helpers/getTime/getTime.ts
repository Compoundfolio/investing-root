import { StringDate } from 'src/core/types';
import ExanteCsvTransaction from '../../../../__types__/ExanteCsvTransaction';

/**
 * Get EXANTE transaction type
 */
// TODO: Format date
const getTime = (Time?: string): StringDate => {
  return Time as StringDate
}

export default getTime
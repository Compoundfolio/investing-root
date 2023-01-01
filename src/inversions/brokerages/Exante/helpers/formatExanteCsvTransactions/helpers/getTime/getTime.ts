import { StringDate } from 'src/core/types';
import ExanteCsvTransaction from '../../../../__types__/ExanteCsvTransaction';

/**
 * Get EXANTE transaction type
 */
// TODO: Format date
const getTime = ({ Time, Type, "Value Date": ValueDate }: ExanteCsvTransaction): StringDate => {
  return Time ?? Type ?? ValueDate as StringDate
}

export default getTime
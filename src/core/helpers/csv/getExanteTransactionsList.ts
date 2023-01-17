import { mergeToDictionary } from "./serializers";
import ExanteCsvData from '../../../inversions/brokerages/Exante/__types__/ExanteCsvData';

const getExanteTransactionsList = (str: string): ExanteCsvData => {
	const headers = str
		.slice(0, str.indexOf("\n"))
		.replaceAll(`"\t"`, ",")
		.replaceAll(`\"`, "")
		.split(",")

	const rows = str
		.slice(str.indexOf("\n") + 1)
		.split("\n")
		.map(el => el
			.replaceAll(`"\t"`, ",")
			.replaceAll(`\"`, "")
			.split(",")
		);

	return mergeToDictionary(headers, rows);
}

export default getExanteTransactionsList
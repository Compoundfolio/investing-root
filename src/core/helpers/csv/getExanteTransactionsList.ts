import { mergeToDictionary } from "./serializers";

const getExanteTransactionsList = (str: string) => {
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
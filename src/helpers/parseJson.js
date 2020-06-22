export default function parseJson(code) {
	try {
		return JSON.parse(code);
	} catch (e) {
		return code;
	}
}

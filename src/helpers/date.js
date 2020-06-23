export const dateDiff = (dateold, datenew) => {
	var ynew = datenew.getFullYear();
	var mnew = datenew.getMonth();
	var dnew = datenew.getDate();
	var yold = dateold.getFullYear();
	var mold = dateold.getMonth();
	var dold = dateold.getDate();
	var diff = ynew - yold;
	if (mold > mnew) diff--;
	else {
		if (mold === mnew) {
			if (dold > dnew) diff--;
		}
	}
	return diff;
};

export const dateAt = (years) => {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDate();
	var c = new Date(year - years, month, day);

	return [
		c.getFullYear(),
		c.getMonth().toString().padStart(2, "0"),
		c.getDate().toString().padStart(2, "0"),
	].join("-");
};

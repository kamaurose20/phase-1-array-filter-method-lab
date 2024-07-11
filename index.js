const drivers = ['Marry', 'Tammy', 'Cullen', 'Annex', 'Brenda', 'Tobby']

drivers.length = 0;
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
drivers.length = 0;
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
drivers.length = 0;
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

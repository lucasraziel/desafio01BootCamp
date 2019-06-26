let numberOfRequests = 0;
export default (request, response, next) => {
	numberOfRequests += 1;
	console.log(`number of requests so far: ${numberOfRequests}`);
	return next();
};

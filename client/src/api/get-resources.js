import axios from "axios";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoints";
import MockAdapter from "axios-mock-adapter";
import tourPackagesJson from "../data/tour-packages.json";
import reviewsJson from "../data/reviews.json";

const { reviews } = reviewsJson;
const { packages } = tourPackagesJson;

const mock = new MockAdapter(axios);

mock.onGet("/packages").reply(200, { packages }).onGet("/reviews").reply(200, { reviews });

async function getPackages() {
	try {
		return await axios.get(API_ENDPOINTS.PACKAGES).then((res) => res.data);
	} catch (error) {
		throw new Error(error);
	}
}

export function useGetPackages() {
	return useQuery("packages", () => getPackages());
}

async function getReviews() {
	try {
		return await axios.get(API_ENDPOINTS.REVIEWS).then((res) => res.data);
		// const res = await axios.get("/keywords");
		// return res;
	} catch (error) {
		throw new Error(error);
	}
}

export function useGetReviews() {
	return useQuery("reviews", () => getReviews());
}

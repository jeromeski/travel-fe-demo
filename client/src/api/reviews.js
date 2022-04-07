import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import reviewsJson from "data/reviews.json";
import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoints";

const { reviews } = reviewsJson;

const mock = new MockAdapter(axios);

mock.onGet("/reviews").reply(200, { reviews });

async function getReviews() {
	return axios.get(API_ENDPOINTS.REVIEWS).then((res) => res.data);
}

export function useGetReviews() {
	return useQuery("reviews", () => getReviews());
}

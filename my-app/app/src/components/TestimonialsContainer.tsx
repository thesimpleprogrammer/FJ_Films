import Testimonials from "./Testimonials";
import { retrieveReviewData } from "@/utils/getReviews";

export default async function TestimonialsContainer() {
  const { reviews }: any = await retrieveReviewData();
  return <Testimonials reviews={reviews} />;
}

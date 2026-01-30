import Testimonials from "./Testimonials";
import { retrieveReviewData } from "@/utils/getReviews";

export default async function TestimonialsContainer() {
  const data = await retrieveReviewData();
  const reviews = data?.reviews ?? [];
  return <Testimonials reviews={reviews} />;
}

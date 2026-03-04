import BookingForm from "@/app/src/components/photography-videography-form";
import { Suspense } from "react";

export default function PackageForm () {
    return (<Suspense fallback={<div>Loading...</div>}><BookingForm /></Suspense>)
}
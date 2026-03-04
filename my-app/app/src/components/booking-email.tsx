import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  packageType: string;
  selectedPackage: string;
  customDetails: string;
  budget: string;
  eventType: string;
  eventDate: string;
  consultationMethod: string;
  notes: string;
  leadTag: string;
  business: string;
}

export function BookingEmail({
  name,
  email,
  phone,
  packageType,
  selectedPackage,
  customDetails,
  budget,
  eventType,
  eventDate,
  consultationMethod,
  notes,
  leadTag,
  business,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>New Consultation Booking</h2>
      <p>
        <strong>Lead Type:</strong> {leadTag}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Business:</strong> {business}
      </p>
      <p>
        <strong>Phone:</strong> {phone || "N/A"}
      </p>
      <p>
        <strong>Event Type:</strong> {eventType}
      </p>
      <p>
        <strong>Event Date:</strong> {eventDate || "Not specified"}
      </p>
      <p>
        <strong>Consultation Method:</strong> {consultationMethod}
      </p>
      {packageType === "custom" ? (
        <>
          <p>
            <strong>Custom Requirements:</strong>
          </p>
          <p>{customDetails}</p>
          <p>
            <strong>Estimated Budget:</strong> {budget || "Not specified"}
          </p>
        </>
      ) : (
        <p>
          <strong>Selected Package:</strong> {selectedPackage}
        </p>
      )}
      <p>
        <strong>Additional Notes:</strong>
      </p>
      <p>{notes || "None"}</p>
    </div>
  );
}

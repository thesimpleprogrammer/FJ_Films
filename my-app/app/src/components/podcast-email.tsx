import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  podcastService: string;
  podcastStage: string;
  message: string;
}

{/* <PodcastEmail
            name={name}
            email={email}
            podcastService={podcastService}
            podcastStage={podcastStage}
            message={message}
          /> */}

export function PodcastEmail({
  name,
  email,
  podcastService,
  podcastStage,
  message
  // phone,
  // packageType,
  // selectedPackage,
  // customDetails,
  // budget,
  // eventType,
  // eventDate,
  // consultationMethod,
  // notes,
  // leadTag,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>New Podcast Booking</h2>
      {/* <p>
        <strong>Lead Type:</strong> {leadTag}
      </p> */}
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Podcast Service:</strong> {podcastService || "N/A"}
      </p>
      <p>
        <strong>Podcast Stage:</strong> {podcastStage}
      </p>
      <p>
        <strong>Message:</strong> {message || "Not specified"}
      </p>
    </div>
  );
}

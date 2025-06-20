import { EventTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function EventCard({
  _id,
  thumbnail,
  title,
  description,
  date,
  time,
}: EventTypes) {
  return (
    <div className="w-full bg-[#F3F6F7] text-lg rounded-[12px] overflow-hidden p-5 space-y-4">
      {/* Image Section */}
      <div className="relative space-y-4">
        <Image
          src={thumbnail}
          alt="Event Thumbnail"
          width={284}
          height={230}
          className="w-full h-[230px] rounded-[8px] object-cover"
        />
        {/* Badge Section */}
        <div className="flex items-center justify-between">
          {/* Date */}
          <p className="w-fit flex items-center gap-1">
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain"
            />
            <span
              className={`text-black-secondary text-base text-nowrap font-semibold px-2.5 py-1 rounded`}
            >
              {date || "Event Date"}
            </span>
          </p>
          {/* Time */}
          <p className="w-fit flex items-center gap-0">
            <Image
              src="/icons/clock.svg"
              alt="time"
              width={20}
              height={20}
              className="w-[20px] h-[20px] object-contain"
            />
            <span
              className={`text-black-secondary text-base text-nowrap font-semibold px-2.5 py-1 rounded`}
            >
              {time || "Event Time"}
            </span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-xl font-medium text-black-primary">
          {title || "Course Title"}
        </h2>
        {/* Description */}
        <p className="text-lg text-black-secondary">
          {description || "Course Description"}
        </p>
        <Link
          href={`/events/details/${_id}`}
          className="flex items-center gap-1.5 text-black-primary text-lg font-medium hover:text-yellow-primary"
        >
          <span>Learn more</span>
          <GoArrowUpRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

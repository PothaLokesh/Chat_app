import React from 'react';
import { createGoogleCalendarUrl } from '../lib/utils';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventPreview = ({ event }) => {
    if (!event || !event.isEvent) return null;

    const calendarUrl = createGoogleCalendarUrl(event);

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl mt-2 max-w-[300px] text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span className="font-medium text-sm">Event Detected</span>
            </div>

            <h3 className="font-bold text-lg mb-1">{event.title || "New Event"}</h3>

            {event.startTime && (
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(event.startTime).toLocaleString()}</span>
                </div>
            )}

            {event.location && (
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                </div>
            )}

            <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white text-center text-sm font-medium rounded-lg transition-colors mt-2"
            >
                📅 Add to Calendar
            </a>
        </div>
    );
};

export default EventPreview;
